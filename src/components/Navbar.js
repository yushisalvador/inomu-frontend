import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="  md:w-80 h-screen bg-teal-300  font-extrabold text-black ">
      <nav className=" flex flex-col">
        <Link to="/" className="flex justify-end mr-10 text-4xl mt-6">
          INOMU
        </Link>

        <ul className="mt-10">
          <CustomLink to="/home">Home</CustomLink>{" "}
          <CustomLink to="/favorites">Favorites</CustomLink>{" "}
        </ul>
      </nav>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li
      className={`border-2 w-1/2 p-2 m-2 float-right text-center
    ${isActive ? "bg-white" : "bg-teal-300"}`}
    >
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
