"use client";
import { useRoute } from "@/contexts/RouteContext";
import { login } from "./actions";

function LoginForm() {
  const { setIsLoggedIn } = useRoute();

  return (
    <form
      action={login}
      className=" flex flex-col gap-3"
      onSubmit={(e) => {
        setIsLoggedIn(true);
      }}
    >
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

      <button className="w-full mt-5 bg-purple1 text-white py-3 rounded-lg hover:bg-purple2">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
