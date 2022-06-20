import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import Feed from "./Feed";
import axios from "axios";
import NewPost from "./NewPost";
import IndividualPost from "./IndividualPost";
import { Route, Routes } from "react-router-dom";
export default function App() {
  const [postData, setPostData] = useState(null);
  const [view, setView] = useState("feed");
  const [selectedPost, setSelectedPost] = useState([][0]);

  return (
    <div className="relative min-h-screen md:flex">
      <div>
        <Navbar />
      </div>
      <div className="flex-1 p-12">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </div>
  );
}
