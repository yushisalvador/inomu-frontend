import React from "react";

export default function Navbar() {
  const navMenu = [
    { name: "Home" },
    { name: "Favorites" },
    {
      name: "login",
    },
  ];
  return (
    <div className="  w-80 h-screen bg-teal-300  font-extrabold text-black">
      <div className="text-right mr-10 p-2 text-3xl"> INOMU</div>
      <ul>
        {navMenu.map((menu, index) => (
          <li
            key={index}
            className="border-2 w-1/2 p-2 m-4 text-center text-xl float-right"
          >
            {menu.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
