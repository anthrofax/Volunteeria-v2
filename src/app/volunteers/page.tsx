"use server";

import { getSession } from "@/app/utils/supabase/authApi";
import { redirect } from "next/navigation";

async function Volunteers() {
  const { session } = await getSession("server");

  if (!session) redirect("/login");

  return (
    <div>
      {/* {user && <h1>Hello, {user.email}</h1>} */}
      <h1>test</h1>
    </div>
  );
}

export default Volunteers;
