import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import axios from "axios";

import { Route, Routes } from "react-router-dom";
export default function App() {
  const [postData, setPostData] = useState(null);

  const getAllPosts = async () => {
    try {
      const post = await axios.get("https://inomubackend.herokuapp.com/");
      setPostData(post.data);
      console.log(post);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="relative min-h-screen md:flex">
      <div>
        <Navbar />
      </div>
      <div className="flex-1 pt-2 pl-2 pr-2">
        <Routes>
          <Route path="/home" element={<Home postData={postData} />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </div>
  );
}
