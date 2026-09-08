import React from 'react'
import { NavLink } from "react-router-dom";

function Sidebar() {

  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "fa-solid fa-house",
    },

    {
      name: "My Rooms",
      path: "/my-rooms",
      icon: "fa-solid fa-users",
    },
    {
      name: "Explore Rooms",
      path: "/explore",
      icon: "fa-solid fa-compass",
    },
    {
      name: "Messages",
      path: "/messages",
      icon: "fa-solid fa-message"
    },
    {
      name: "Friends",
      path: "/friends",
      icon: "fa-solid fa-people-group"
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "fa-solid fa-user",
    },
    {
      name: "Settings",
      path: "/settings",
      icon: "fa-solid fa-gear",
    },
  ];
  return (
    <aside className="w-64 shrink-0 border-r border-[#262936] px-4 py-3 flex flex-col h-[calc(100vh-56px)]">

      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 rounded-lg px-4 py-2.5 transition ${isActive
                ? "bg-[#7C3AED]/15 text-[#A78BFA]"
                : "text-gray-400 hover:bg-[#151821] hover:text-white"
              }`
            }
          >
            <i className={`${item.icon} w-5 text-center`}></i>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto border-t border-[#262936] pt-5 px-3">
        <h2 className="text-xl font-semibold leading-tight">
          Build better
          <br />
          together.
        </h2>

        <p className="mt-2 text-sm leading-5 text-gray-500">
          Real-time coding.
          <br />
          Real connections.
        </p>
      </div>

    </aside>
  )
}

export default Sidebar
