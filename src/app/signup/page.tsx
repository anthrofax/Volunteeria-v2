"use client";

import Heading from "@/app/components/heading";
import SignupForm from "./signup-form";

import ConfirmationBox from "@/app/components/confirmation-box";
import { useSignupContext } from "@/app/contexts/signup-context";

function page() {
  const { showConfirm } = useSignupContext();

  return (
    <div className="relative w-full h-screen bg-white2">
      <div
        role="login-container"
        className="w-[30rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-20 px-10  shadow-lg bg-white"
      >
        <Heading text="Register" level="h1" className="text-center mb-7" />

        <SignupForm />
        <p className="mt-7 text-center">
          Sudah memiliki akun?{" "}
          <a href="/login" className="text-blue-600 underline">
            Login
          </a>
        </p>
      </div>

      {showConfirm && (
        <ConfirmationBox confirmationLabel="Apakah data yang anda masukkan sudah benar?" />
      )}
    </div>
  );
}

export default page;
