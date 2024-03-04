"use client";

import { useEffect, useState } from "react";
import { getSession } from "./supabase/authApi";
import { useRouter } from "next/navigation";

function useProtectRoute(isRedirect: boolean = false) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  

  useEffect(function () {
    const getSessionTemp = async () => {
      const { session } = await getSession("client");
      setIsLoggedIn(session !== null);

      if (!session && isRedirect) {

        router.push("/login");
      } 
      if (session && isRedirect) router.push("/volunteers");
    };

    getSessionTemp();
  }, []);

  console.log(isLoggedIn);
  return isLoggedIn;
}

export default useProtectRoute;
