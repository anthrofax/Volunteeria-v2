import { createClient } from "@/utils/supabase/server";
import { useQuery } from "@tanstack/react-query";
import { redirect } from "next/navigation";

async function Volunteers() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  console.log(user);

  if (error) {
    redirect("/");
  }

  return (
    <div>
      {user && <h1>Hello, {user.email}</h1>}
      <h1>test</h1>
    </div>
  );
}

export default Volunteers;
