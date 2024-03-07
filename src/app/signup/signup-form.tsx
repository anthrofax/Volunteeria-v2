"use client";
// import { signup } from "@/utils/supabase/authApi";
// import { useMutation } from "@tanstack/react-query";
// import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";

function SignupForm() {

  // const { mutate } = useMutation({
  //   mutationFn: signup,
  //   onSuccess: () => {
  //     toast.success("Akun anda berhasil terdaftar");

  //     return "/login";
  //   },
  //   onError: () => {
  //     toast.error("Ada kesalahan pada pendaftaran akun");
  //   },
  // });

  return (
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

      <button
        className="w-full mt-5 bg-purple1 text-white py-3 rounded-lg hover:bg-purple2"
        onClick={() => {
          // const confirm =
        }}
      >
        Signup
      </button>

      <button className="w-full mt-5 bg-black hover:bg-black2 text-white py-3 rounded-lg flex justify-center items-center gap-3">
        <FaGithub size={28} />
        Signup with Github
      </button>
    </form>
  );
}

export default SignupForm;
