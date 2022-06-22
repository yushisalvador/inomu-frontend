import React, { useState } from "react";
import axios from "axios";
import GeneratedCocktail from "./GeneratedCocktail";

export default function Generator() {
  const [randomCocktail, setRandomCocktail] = useState(null);
  const [showGeneratedCocktail, setShowGeneratedCocktail] = useState(null);

  const generateNewCocktail = async () => {
    const cocktails = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const generatedCocktail = cocktails.data.drinks[0];
    const cocktailObj = {
      cocktailName: generatedCocktail.strDrink,
      image: generatedCocktail.strDrinkThumb,
      instructions: generatedCocktail.strInstructions,
      ingredients: getIngredients(generatedCocktail),
    };
    setRandomCocktail(cocktailObj);
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

  return (
    <div>
      <button
        onClick={() => {
          setShowGeneratedCocktail(true);
          generateNewCocktail();
        }}
        title="Don't know what to pick? Let us pick for you!"
        className="mt-2 mb-2 border-solid border-2 border-primary p-2 rounded-full bg-nav scale-100 hover:scale-105 hover:bg-navClick hover:text-white font-semibold"
      >
        Generate cocktail
      </button>

      {showGeneratedCocktail && (
        <GeneratedCocktail
          randomCocktail={randomCocktail}
          setShowGeneratedCocktail={setShowGeneratedCocktail}
        />
      )}
    </div>
  );
}
