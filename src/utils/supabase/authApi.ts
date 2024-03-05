import { Session } from "next-auth";
import { createClient } from "./client";
import { createClient as createServer } from "./server";
import { AuthError } from "@supabase/supabase-js";

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
