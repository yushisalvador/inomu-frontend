import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <div className=" bg-nav text-gray-100 w-screen flex flex-row justify-between md:hidden">
        <div className="text-xl">Inomu</div>
        <button
          className="p-4 focus:outline-none focus:bg-teal-700"
          onClick={() => {
            if (open) {
              setOpen(false);
            } else {
              setOpen(true);
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div
        className={`md:w-80 h-screen bg-nav font-extrabold text-black absolute inset-y-0 left-0 transform z-40
          ${
            open ? "-translate-x-full" : ""
          } md:relative md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <nav className=" flex flex-col">
          <Link to="/" className="flex justify-end mr-10 text-4xl mt-6">
            INOMU
          </Link>

          <ul className="mt-10">
            <li>
              <CustomLink to="/home">Home</CustomLink>{" "}
            </li>
            <li>
              <CustomLink to="/favorites">Favorites</CustomLink>{" "}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li
      className={`p-4 mt-2 mb-2 text-xl text-center
    ${
      isActive ? "bg-navClick" : "bg-nav"
    } hover:bg-navClick hover:cursor-pointer`}
    >
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
