"use client";
import { Spinner } from "flowbite-react";
import useLogin from "./use-login";

function LoginForm() {
  const { register, handleSubmit, onSubmit, errors, isDoingLogin } = useLogin();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col gap-3">
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="rounded-md  active:outline-2 outline-purple1"
          autoFocus
          id="email"
          defaultValue="afridhoikhsan@gmail.com"
          {...register("email", {
            required: "Kolom ini harus diisi",
          })}
        />
        <p className="text-red-600 mt-3">{errors?.email?.message}</p>
      </div>

      <div className="flex flex-col">
        <label htmlFor="username">Password</label>
        <input
          type="password"
          className="rounded-md  active:outline-2 outline-purple1"
          id="password"
          defaultValue="mar777it39"
          {...register("password", {
            required: "Kolom ini harus diisi",
          })}
        />
        <p className="text-red-600 mt-3">{errors?.password?.message}</p>
      </div>

      <button className="w-full mt-5 bg-purple1 text-white py-3 rounded-lg hover:bg-purple2">
        Login {isDoingLogin && <Spinner size="sm" />}
      </button>
    </form>
  );
}

export default LoginForm;
