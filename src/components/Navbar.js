import React from "react";

export default function Navbar() {
  return (
    <div className="  w-screen bg-teal-300  font-extrabold text-black pt-12">
      <div className="flex flex-row">
        <div className="flex-1 text-4xl ml-5 ">INOMU</div>
        <div className="ml-5 text-2xl mt-auto hover:text-white hover:cursor-pointer">
          Home
        </div>
        <div className="ml-5  text-2xl mt-auto hover:text-white hover:cursor-pointer">
          Favorites
        </div>
        <div className="ml-5  text-2xl mr-5  mt-auto hover:text-white hover:cursor-pointer">
          Login
        </div>
      </div>
    </div>
  );
}
