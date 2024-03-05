"use client";

import { useEffect, useState } from "react";
import { getSession } from "./supabase/authApi";

export default function useSession() {
  let isLoggedIn = false;

  useEffect(function () {
    const getSessionTemp = async () => {
      const { session } = await getSession();

      if (session) isLoggedIn = true;
    };

    getSessionTemp();
  }, []);

  return { isLoggedIn };
}
