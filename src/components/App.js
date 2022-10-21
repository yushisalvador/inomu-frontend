import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Discover from "../pages/Discover";
import axios from "axios";
import Login from "../pages/Login";

import { Route, Routes } from "react-router-dom";

export default function App() {
  const [postData, setPostData] = useState(null);

  const getAllPosts = async () => {
    try {
      const post = await axios.get("https://inomubackend.herokuapp.com/posts");
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
    <div className="relative md:flex">
      <div>
        <Navbar />
      </div>
      <div className="flex-1 pt-2 pl-2 pr-2">
        <Routes>
          <Route path="/" element={<Home postData={postData} />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}
