import React, { useState } from "react";
import axios from "axios";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
export default function CocktailModal({ setShowPostForm }) {
  const [username, setUsername] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [cocktail, setCocktail] = useState("");
  const [description, setDescription] = useState("");
  const [recipe, setRecipe] = useState("");
  const [imageURL, setImageURL] = useState("");

  const metadata = {
    contentType: "image/jpeg",
  };

  const imgUpload = async (image) => {
    try {
      const imageRef = ref(storage, `${image.name + v4()}`);
      const snapshot = await uploadBytes(imageRef, image, metadata);
      const url = await getDownloadURL(snapshot.ref);
      setImageURL(url);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPostObj = {
      username: username,
      image: imageURL,
      cocktail_name: cocktail,
      description: description,
      ingredients: ingredients,
      recipe: recipe,
    };
    console.log(newPostObj);
    setShowPostForm(false);
    submitPostReq(newPostObj);
  };

  const submitPostReq = async (data) => {
    try {
      await axios.post(
        "https://inomubackend.herokuapp.com/posts/newpost",
        data
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed z-10 overflow-y-auto top-0 w-full left-0" id="modal">
      <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">
        <div className="fixed inset-0 transition-opacity overflow-y-auto no-scrollbar">
          <div className="absolute inset-0 bg-gray-500 opacity-20" />
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        <div
          className="inline-block align-center bg-white rounded-lg text-left  shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:overflow-y-auto m-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div
            className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex flex-col"
            onSubmit={handleSubmit}
          >
            <label>Username</label>
            <input
              type="text"
              className="border border-red-600"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label>Drink Name </label>
            <input
              type="text"
              className="border border-red-600"
              value={cocktail}
              onChange={(e) => setCocktail(e.target.value)}
            />

            <label>Description </label>
            <textarea
              className="border border-red-600 "
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <label>Ingredients </label>
            <textarea
              className="border border-red-600 "
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
            <label>Recipe </label>
            <textarea
              className="border border-red-600 "
              value={recipe}
              onChange={(e) => setRecipe(e.target.value)}
            />
            <div className="mt-2">
              <input
                className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-nav file:text-black
                hover:file:bg-navClick"
                type="file"
                name="pic"
                onChange={(e) => {
                  imgUpload(e.target.files[0]);
                }}
              />
            </div>
          </div>
          <div className="bg-nav px-4 py-3 text-right">
            <button
              onClick={() => setShowPostForm(false)}
              type="button"
              className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              type="submit"
              className="py-2 px-4 bg-red-400 text-white rounded hover:bg-navClick"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
