"use client";

import Heading from "@/components/heading";
import { Button } from "flowbite-react";

function page() {
  return (
    <div className="relative w-full h-screen bg-white2">
      <div
        role="login-container"
        className="w-[30rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-20 px-10  shadow-lg bg-white"
      >
        <Heading text="Login" level="h1" className="text-center mb-7" />

        <div role="input-container" className=" flex flex-col gap-3">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="rounded-md  active:outline-2 outline-purple1"
              autoFocus
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="username">Password</label>
            <input
              type="password"
              className="rounded-md  active:outline-2 outline-purple1"
            />
          </div>
        </div>

        <Button color="purple" size="xl" className="w-full mt-5">
          Login
        </Button>

        <p className="mt-7">
          Tidak memiliki akun?{" "}
          <a href="" className="text-blue-600">
            Daftar
          </a>
        </p>
      </div>
    </div>
  );
}

export default page;
