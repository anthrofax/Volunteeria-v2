"use client";

import { MdOutlineVolunteerActivism } from "react-icons/md";
import {
  Navbar as FlowbiteNavbar,
  Button,
  Dropdown,
  Avatar,
} from "flowbite-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { getSession, logout } from "@/app/utils/supabase/authApi";
import { useRoute } from "@/app/contexts/RouteContext";
import { useEffect } from "react";

function Navbar() {
  const pathname = usePathname();
  const { isLoggedIn, setIsLoggedIn } = useRoute();
  const router = useRouter();

  useEffect(() => {
    const tempGetSession = async () => {
      try {
        const { session } = await getSession("client");

        setIsLoggedIn(session !== null);
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    };

    tempGetSession();
  }, []);

  return (
    <FlowbiteNavbar fluid rounded className="p-5 shadow-md shadow-slate-300 ">
      <FlowbiteNavbar.Brand href="/">
        <Image
          src="/logo-dark.svg"
          className="mr-3"
          alt="Flowbite React Logo"
          width={55}
          height={55}
        />
        <span className="self-center whitespace-nowrap text-3xl  dark:text-white">
          Volunteeria
        </span>
      </FlowbiteNavbar.Brand>
      <div className="flex md:order-2 items-center gap-5">
        <FlowbiteNavbar.Collapse>
          <FlowbiteNavbar.Link
            href="/about"
            className={`nav-links ${
              pathname === "/about" ? "text-purple1" : ""
            } `}
          >
            About
          </FlowbiteNavbar.Link>
          {!isLoggedIn && (
            <FlowbiteNavbar.Link
              href="/signup"
              className={`nav-links ${
                pathname === "/signup" ? "text-purple1" : ""
              }`}
            >
              Sign up
            </FlowbiteNavbar.Link>
          )}

          {!isLoggedIn && (
            <FlowbiteNavbar.Link
              href="/login"
              className={`nav-links ${
                pathname === "/login" ? "text-purple1" : ""
              }`}
            >
              Login
            </FlowbiteNavbar.Link>
          )}
        </FlowbiteNavbar.Collapse>

        {pathname !== "/volunteers" && (
          <form action="/volunteers" className="hidden md:block">
            <Button
              pill
              gradientMonochrome="purple"
              type="submit"
              className="text-xl"
            >
              Volunteers / Jobs{" "}
              <div className="ml-2 mb-2">
                <MdOutlineVolunteerActivism size={30} />
              </div>
            </Button>
          </form>
        )}

        {isLoggedIn && (
          <div className="flex md:order-2">
            <Dropdown
              className=""
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Dropdown.Header className="">
                <span className="block text-sm">Bonnie Green</span>

                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                onClick={async () => {
                  const { error } = await logout();

                  if (!error) {
                    setIsLoggedIn(false);
                    router.push("/login");
                  }
                }}
              >
                Sign out
              </Dropdown.Item>
            </Dropdown>
          </div>
        )}

        <FlowbiteNavbar.Toggle />
      </div>
    </FlowbiteNavbar>
  );
}

export default Navbar;
