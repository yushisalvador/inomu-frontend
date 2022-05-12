import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Feed from "./Feed";
import axios from "axios";
import NewPost from "./NewPost";
import IndividualPost from "./IndividualPost";
function App() {
  const [postData, setPostData] = useState(null);
  const [view, setView] = useState("feed");
  const [selectedPost, setSelectedPost] = useState([][0]);

  const fetchData = async () => {
    const response = await axios.get("http://inomubackend.herokuapp.com/");
    console.log(response.data);
    setPostData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (view === "feed") {
    return (
      <div>
        <Navbar />
        <NewPost />

        <Feed
          postData={postData}
          setSelectedPost={setSelectedPost}
          setView={setView}
        />
      </div>
    );
  } else {
    return (
      <div>
        <Navbar setView={setView} />
        <IndividualPost
          setView={setView}
          postData={postData}
          selectedPost={selectedPost}
          setSelectedPost={setSelectedPost}
        />
      </div>
    );
  }
}

export default App;
