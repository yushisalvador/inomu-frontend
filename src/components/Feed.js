import React, { useState } from "react";
export default function Feed({ postData, setView, setSelectedPost }) {
  if (postData !== null) {
    return (
      <div>
        <div className="font-bold pb-2 mt-10 text-center text-4xl text-primary border-b border-gray-200">
          Cocktail Feed
        </div>
        <div className="flex flex-row justify-center mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input type="text" className="border-2" />
        </div>

        <div className="flex flex-row flex-wrap justify-center mb-10 ">
          {postData.map((post, index) => {
            const postObj = {
              username: post.username,
              image: post.image,
              cocktail_name: post.cocktail_name,
              ingredients: post.ingredients,
              recipe: post.recipe,
              posted: post.updated_at,
            };
            return (
              <div key={index} className=" h-90 w-80 p-4 border-4 ml-10 mt-20">
                <div className="flex flex-row justify-between ">
                  <div className="font-medium text-xl">
                    {" "}
                    {postObj.cocktail_name}
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-6 text-white hover:text-black"
                      fill="white"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>

                <div>
                  Posted by user{" "}
                  <span className="font-medium">{postObj.username}</span>
                </div>
                <div>
                  <img
                    src={postObj.image}
                    alt="cocktail"
                    object-cover
                    className="object-cover h-48 w-96 mt-5"
                  />{" "}
                  <div
                    className="hover:cursor-pointer hover:underline mt-2"
                    onClick={() => {
                      setSelectedPost(index);
                      setView("single");
                    }}
                  >
                    See Recipe
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
