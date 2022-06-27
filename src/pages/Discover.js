import { areCookiesEnabled } from "@firebase/util";
import axios from "axios";
import React, { useState, useEffect } from "react";
import DiscoverModal from "../components/DiscoverModal";

export default function Discover() {
  const [cocktailData, setCocktailData] = useState(null);
  const [selected, setSelected] = useState(0);
  const [showCocktailModal, setShowCocktailModal] = useState(false);
  const [discoverCocktailInfo, setDiscoverCocktailInfo] = useState(null);
  const alcoholTypes = ["Gin", "Whiskey", "Vodka", "Rum"];

  const getCocktails = async (type) => {
    const cocktails = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${type}`
    );
    setCocktailData(cocktails.data.drinks);
  };

  const getCocktailInfo = async (id) => {
    const cocktailInfo = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const cocktail = cocktailInfo.data.drinks[0];
    const discoverCocktailObj = {
      id: cocktail.idDrink,
      cocktailName: cocktail.strDrink,
      image: cocktail.strDrinkThumb,
      instructions: cocktail.strInstructions,
      ingredients: getIngredients(cocktail),
    };
    setDiscoverCocktailInfo(discoverCocktailObj);
  };

  const getIngredients = (generatedCocktail) => {
    let ingredients = [];
    for (let i = 1; i <= 15; i++) {
      let ingredient = "strIngredient" + i;
      if (generatedCocktail[ingredient] !== null) {
        ingredients.push(generatedCocktail[ingredient]);
      } else {
        break;
      }
    }
    return ingredients;
  };

  useEffect(() => {
    let alcoholType = "gin";
    getCocktails(alcoholType);
  }, []);

  return (
    <div className="md:flex flex-col items-center justify-center ">
      <div className="md:text-2xl p-4 flex justify-center">
        <div className="text-center">
          Feeling spontaneous? Check out our cocktail list!
        </div>
      </div>

      <div>
        <ul className="flex flex-row flex-wrap justify-center">
          {alcoholTypes.map((type, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  getCocktails(type);
                  setSelected(index);
                }}
                className={`border-2 ${
                  selected === index ? "bg-white" : "bg-navClick"
                } border-nav hover:bg-white font-semibold p-4 md:w-36`}
              >
                {type}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center md:ml-10 justify-center h-4/5 overflow-auto flex-wrap md:w-4/6 pb-10">
        {cocktailData ? (
          cocktailData.map((drink) => (
            <div
              key={drink.idDrink}
              className=" border rounded-lg md:ml-10 md:flex mt-10 flex flex-col p-4 scale-100 hover:scale-110 shadow-lg shadow-red-300 bg-white bg-opacity-60"
            >
              <img
                src={drink.strDrinkThumb}
                alt="cocktail
              "
                className="md:h-2/4 w-56 m-auto rounded mb-2"
              />
              <div className="ml-4">
                <div> {drink.strDrink}</div>
                <div
                  className="underline hover:cursor-pointer"
                  onClick={() => {
                    getCocktailInfo(drink.idDrink);
                    setShowCocktailModal(true);
                  }}
                >
                  See recipe{" "}
                </div>
              </div>{" "}
            </div>
          ))
        ) : (
          <div>
            <div className="text-4xl mt-10">Loading drinks...</div>
          </div>
        )}
        {showCocktailModal && (
          <DiscoverModal
            discoverCocktailInfo={discoverCocktailInfo}
            setShowCocktailModal={setShowCocktailModal}
          />
        )}
      </div>
    </div>
  );
}
