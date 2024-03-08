import { createClient } from "./client";
import { createClient as createServer } from "./server";
import { AuthError, Session } from "@supabase/supabase-js";

const supabase = createClient();

export async function getSession(whereToUse: "client" | "server") {
  const supabase =
    whereToUse === "server" ? await createServer() : createClient();

  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  return { session, error } as {
    session: Session | null;
    error: AuthError | null;
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

export async function login(formData: any) {
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    throw new Error("Email atau kata sandi yang anda masukkan salah");
  }

  return { successMessage: "Anda telah berhasil login" };
}

export async function signup(formData: any) {
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.email,
    password: formData.password,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    throw new Error("Terjadi kegagalan pada pendaftaran akun");
  }

  return { successMessage: "Akun anda telah berhasil didaftarkan" };
}
