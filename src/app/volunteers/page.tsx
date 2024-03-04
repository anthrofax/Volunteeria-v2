"use client";

import useProtectRoute from "@/utils/useProtectRoute";

function Volunteers() {
  const isLoggedIn = useProtectRoute(true);

  return (
    <div>
      {/* {user && <h1>Hello, {user.email}</h1>} */}
      <h1>test</h1>
    </div>
  );
}

export default Volunteers;
