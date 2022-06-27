import React from "react";

export default function IndividualPost({ setView, postData, selectedPost }) {
  return (
    <div className="md:w-4/6 md:m-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 hover:cursor-pointer mt-10 flex flex-4"
        onClick={() => setView("feed")}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      <div className="flex flex-col items-center p-2">
        <div className="font-medium text-2xl">
          {" "}
          {postData[selectedPost].cocktail_name}
        </div>
        <div>
          Posted by user{" "}
          <span className="font-medium">{postData[selectedPost].username}</span>
        </div>
        <div className="flex flex-row justify-center">
          <img
            src={postData[selectedPost].image}
            className="w-96 "
            alt="cocktail"
          />
        </div>
        <div className="mt-2 mb-4">
          {" "}
          <div className="font-bold text-center text-xl">Ingredients </div>
          <div>{postData[selectedPost].ingredients} </div>
        </div>{" "}
        <div>
          <div className="font-bold text-center text-xl"> Recipe </div>
          <div>{postData[selectedPost].recipe}</div>
        </div>
      </div>
    </div>
  );
}
