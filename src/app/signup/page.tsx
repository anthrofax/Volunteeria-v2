"use client";

import Heading from "@/components/heading";

import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { FaGithub } from "react-icons/fa";

function page() {
  return (
    <div className="relative w-full h-screen bg-white2">
      <div
        role="login-container"
        className="w-[30rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-20 px-10  shadow-lg bg-white"
      >
        <Heading text="Register" level="h1" className="text-center mb-7" />

        <form action="" className=" flex flex-col gap-3">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="rounded-md  active:outline-2 outline-purple1"
              autoFocus
              name="email"
              id="email"
              defaultValue="afridhoikhsan@gmail.com"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="username">Password</label>
            <input
              type="password"
              className="rounded-md  active:outline-2 outline-purple1"
              name="password"
              id="password"
              defaultValue="mar777it39"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="username">Confirm Password</label>
            <input
              type="password"
              className="rounded-md  active:outline-2 outline-purple1"
              name="confirm-password"
              id="confirm-password"
              defaultValue="mar777it39"
            />
          </div>

          <button className="w-full mt-5 bg-purple1 text-white py-3 rounded-lg hover:bg-purple2">
            Login
          </button>

          <button className="w-full mt-5 bg-black hover:bg-black2 text-white py-3 rounded-lg flex justify-center items-center gap-3">
            <FaGithub size={28} />
            Login with Github
          </button>
        </form>

        <p className="mt-7 text-center">
          Sudah memiliki akun?{" "}
          <a href="/login" className="text-blue-600 underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default page;
