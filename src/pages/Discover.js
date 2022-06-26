import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Discover() {
  const [cocktailData, setCocktailData] = useState(null);
  const alcoholTypes = ["Gin", "Whiskey", "Vodka", "Rum"];
  const [selected, setSelected] = useState(0);

  const getcocktails = async (type) => {
    const cocktails = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${type}`
    );
    setCocktailData(cocktails.data.drinks);
    console.log(cocktails);
  };

  useEffect(() => {
    let type = "gin";
    getcocktails(type);
  }, []);

  return (
    <div className="md:flex flex-col items-center justify-center ">
      <div className="md:text-2xl p-4 flex justify-center">
        <div>Want to explore? Checkout our cocktails lists!</div>
      </div>

      <div>
        <ul className="flex flex-row flex-wrap justify-center">
          {alcoholTypes.map((type, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  getcocktails(type);
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
            <div className=" border-black border-2 md:ml-10 md:flex mt-10 bg-green-200  flex flex-col p-4 scale-100 hover:scale-110">
              <img
                src={drink.strDrinkThumb}
                alt="cocktail
              "
                className="md:h-2/4 w-56 m-auto"
              />
              <div className=" ml-4">
                <div> {drink.strDrink}</div>
              </div>{" "}
            </div>
          ))
        ) : (
          <div> no drink</div>
        )}
      </div>
    </div>
  );
}
