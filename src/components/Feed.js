import React, { useState } from "react";
import CocktailModal from "./CocktailModal";
import axios from "axios";
import Generator from "./Generator";
export default function Feed({ setSelectedPost, setView, postData }) {
  const [showPostForm, setShowPostForm] = useState(false);

  const deletePost = async (id) => {
    try {
      await axios.delete(`https://inomubackend.herokuapp.com/posts/${id}`);
    } catch (error) {
      console.log(error);
      alert("Failed to delete post");
    }
  };

  if (postData !== null) {
    return (
      <div>
        <div className="font-bold pb-2 mt-4 text-center text-4xl text-primary border-b border-gray-200">
          Cocktail Feed
        </div>

        <div className="flex flex-row justify-evenly mt-4">
          <button
            title="Share your new discoveries!"
            className="mt-2 mb-2 border-solid border-4 border-primary p-2 rounded-lg hover:bg-navClick hover:text-white"
            onClick={() => setShowPostForm(true)}
          >
            Add New Cocktail
          </button>
          <div>
            <Generator />
          </div>
        </div>

        {showPostForm && <CocktailModal setShowPostForm={setShowPostForm} />}
        <div className="flex flex-row flex-wrap justify-center mb-10 w-full h-2/3 overflow-y-auto">
          {postData.map((post, index) => {
            const postObj = {
              username: post.username,
              image: post.image,
              cocktail_name: post.cocktail_name,
              ingredients: post.ingredients,
              recipe: post.recipe,
              posted: post.updated_at,
              id: post.id,
            };
            return (
              <div key={index} className=" h-90 w-80 p-4 border-4 ml-10 mt-2">
                <div className="flex flex-row justify-between ">
                  <div className="font-medium text-xl">
                    {" "}
                    {postObj.cocktail_name}
                  </div>
                  <div>
                    <svg
                      onClick={() => {
                        deletePost(postObj.id);
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-6 text-white hover:text-black hover:cursor-pointer hover:bg-gray-100"
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
                  Posted by user
                  <span className="font-medium"> {postObj.username}</span>
                </div>
                <div>
                  <img
                    src={postObj.image}
                    alt="cocktail"
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
