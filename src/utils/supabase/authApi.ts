import { Session } from "next-auth";
import { createClient } from "./client";
import { createClient as createServerClient } from "./server";
import { AuthError } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

const supabase = createClient();

export async function getSession(whereToUse: "server" | "client") {
  const supabase =
    whereToUse === "server" ? await createServerClient() : createClient();

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
