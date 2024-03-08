"use client";
import { useSignupContext } from "@/app/contexts/SignupContext";

function SignupForm() {
  const {
    register,
    getValues,
    errors,
    onShowConfirm,
    form,
    handleSubmit,
    onSubmit,
    onError,
  } = useSignupContext();

  return (
    <>
      <form
        ref={form}
        className=" flex flex-col gap-3"
        method="post"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="rounded-md  active:outline-2 outline-purple1"
            autoFocus
            id="email"
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
            {...register("password", {
              required: "Kolom ini harus diisi",
            })}
          />
          <p className="text-red-600 mt-3">{errors?.password?.message}</p>
        </div>

        <div className="flex flex-col">
          <label htmlFor="username">Confirm Password</label>
          <input
            type="password"
            className="rounded-md  active:outline-2 outline-purple1"
            id="confirmPassword"
            {...register("confirmPassword", {
              required: "Kolom ini harus diisi",
              validate: (value: string) =>
                value === getValues().password ||
                "Kata sandi yang anda masukkan tidak cocok",
            })}
          />
          <p className="text-red-600 mt-3">
            {errors?.confirmPassword?.message}
          </p>
        </div>
        {/* <button className="w-full mt-5 bg-black hover:bg-black2 text-white py-3 rounded-lg flex justify-center items-center gap-3">
        <FaGithub size={28} />
        Signup with Github
      </button> */}
      </form>

      <button
        className="w-full mt-5 bg-purple1 text-white py-3 rounded-lg hover:bg-purple-500"
        onClick={() => {
          onShowConfirm(true);
        }}
      >
        Signup
      </button>
    </>
  );
}

export default SignupForm;
