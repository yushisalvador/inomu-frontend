import Feed from "../components/Feed";
import React, { useState } from "react";
import IndividualPost from "../components/IndividualPost";
import Carousel from "../components/Carousel";
export default function Home({ postData }) {
  const [view, setView] = useState("feed");
  const [selectedPost, setSelectedPost] = useState([][0]);

  if (view === "feed") {
    return (
      <div>
        <Carousel />
        <Feed
          postData={postData}
          setView={setView}
          setSelectedPost={setSelectedPost}
        />
      </div>
    );
  } else {
    return (
      <div>
        {" "}
        <IndividualPost
          setView={setView}
          postData={postData}
          setSelectedPost={setSelectedPost}
          selectedPost={selectedPost}
        />
      </div>
    );
  }
}
