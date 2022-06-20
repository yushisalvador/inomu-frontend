import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Home from "../pages/Home";
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
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}
