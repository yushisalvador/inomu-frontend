import React, { useState } from "react";
import axios from "axios";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

export default function NewPost() {
  const [button, setShowButton] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
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
      const imageRef = ref(storage, `cocktails/${image.name + v4()}`);
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
    hideForm();

    submitPostReq(newPostObj);
  };

  const submitPostReq = async (data) => {
    try {
      await axios.post("https://inomubackend.herokuapp.com/newpost", data);
    } catch (error) {
      console.log(error);
    }
  };

  const hideForm = () => {
    setShowForm(false);
    setShowButton(true);
  };
  const hideButton = () => {
    setShowForm(true);
    setShowButton(false);
  };

  return (
    <div className=" flex justify-center">
      {showForm ? (
        <div className="flex flex-col bg-slate-100 p-10 mt-4">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-4">
              <label>Username </label>
              <input
                type="text"
                className="border border-red-600 "
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label>Drink Name </label>
              <input
                type="text"
                className="border border-red-600"
                value={cocktail}
                onChange={(e) => setCocktail(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label>Description </label>
              <textarea
                className="border border-red-600 "
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="flex flex-col mb-4">
              <label>Ingredients </label>
              <textarea
                className="border border-red-600 "
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label>Recipe </label>
              <textarea
                className="border border-red-600 "
                value={recipe}
                onChange={(e) => setRecipe(e.target.value)}
              />
            </div>

            <div>
              <input
                type="file"
                name="pic"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                  imgUpload(image);
                }}
              />
            </div>
            <button
              type="submit"
              className="border  border-red-600 px-10 py-2 mt-2"
            >
              {" "}
              Post
            </button>
          </form>

          <button
            className="border  border-red-600 px-10 py-2 mt-2"
            onClick={hideForm}
          >
            {" "}
            Cancel
          </button>
        </div>
      ) : null}

      {button ? (
        <div>
          <button
            className="border-solid border-2 border-primary p-3 rounded-lg mt-5"
            onClick={hideButton}
          >
            ADD NEW COCKTAIL
          </button>
        </div>
      ) : null}
    </div>
  );
}
