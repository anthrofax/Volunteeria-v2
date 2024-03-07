import { Session } from "next-auth";
import { createClient } from "./client";
import { createClient as createServer } from "./server";
import { AuthError } from "@supabase/supabase-js";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import toast from "react-hot-toast";

const supabase = createClient();

export async function getSession(whereToUse: "client" | "server") {
  const supabase =
    whereToUse === "server" ? await createServer() : createClient();

  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  return { session, error } as {
    session: any;
    error: any;
  };
}

export async function logout() {
  let { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }

  return { error };
}

export async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

export async function login(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    throw new Error("Terdapat kesalahan saat login");
  }

  return {successMessage: "Anda telah berhasil login"}
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    toast.error("Telah terjadi kesalahan");
  }

  revalidatePath("/", "layout");
  redirect("/login");
}
