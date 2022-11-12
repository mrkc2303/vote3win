/*eslint-disable*/
import React from "react";
import Link from "next/link";
import logo from "../public/svg/logo.svg";
import Image from "next/image";
import { TemplateIcon } from "@heroicons/react/outline";
import { Moon, Clock, Edit, LogOut, AlignLeft } from "react-feather";
import SidebarItem from "./SidebarItem";
import { CreatePoll, FillPoll, History } from "./Icons";
import Header from "./Header";
import Toggler from "./Toggler";

export const routes = [
  {
    name: "Home",
    path: "/dashboard",
    icon: (
      <TemplateIcon
        width={25}
        height={25}
        className="text-400"
        strokeWidth={1}
      />
    ),
    toggle: null,
  },
  {
    name: "New Poll",
    path: "/create-poll",
    icon: CreatePoll,
    toggle: null,
  },
  {
    name: "Vote",
    path: "/fill-poll",
    icon: FillPoll,
    toggle: null,
  },
  {
    name: "Previous Polls",
    path: "/poll-history",
    icon: History,
    toggle: null,
  },
];

function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState(false);
  return (
    <>
      <nav
        className={
          (collapseShow && "active ") +
          " transition-all sidebar justify-between flex flex-col left-0 fixed top-0 bottom-0 overflow-hidden shadow-xl bg-white w-74 z-10 py-4 px-6 pr-16 whole-bg"
        }
      >
        <div>
          {/* Brand */}
          <div className="flex justify-between">
            <Link href="/">
              <a className="text-primary flex items-center font-bold">
                <Image src={logo} width={80} height={80} />
                Vote3Win
              </a>
            </Link>

            {/* Toggler */}
            <button
              className="cursor-pointer text-black ml-3 mt-2 fixed left-64 top-8 left lg:hidden"
              type="button"
              onClick={() => setCollapseShow(!collapseShow)}
            >
              <AlignLeft className="text-gray-400" width={30} height={30} />
            </button>
            {/* Toggler */}
          </div>
          {/* Brand */}

          {/* Collapse */}
          <ul className="md:min-w-full list-none">
            {routes.map((route, i) => (
              <SidebarItem route={route} key={route.name} />
            ))}
            {/* <SidebarItem
              route={{
                name: "Dark Mode",
                path: "#",
                icon: <Moon strokeWidth={1} />,
                toggle: <Toggler />,
              }}
            /> */}
          </ul>
          {/* Collapse */}
        </div>
        {/* Collapse */}
        <ul className="md:min-w-full list-none">
          <SidebarItem
            route={{
              name: "Log out",
              path: "/login",
              icon: <LogOut color="red" strokeWidth={1} />,
            }}
          />
        </ul>
        {/* Collapse */}
      </nav>
      <Header />
    </>
  );
}

export default Sidebar;
