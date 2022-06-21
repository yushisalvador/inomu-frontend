import React from "react";

export default function GeneratedCocktail({
  randomCocktail,
  setShowGeneratedCocktail,
}) {
  return (
    <div className="fixed z-10 overflow-y-auto top-0 w-full left-0" id="modal">
      <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-20" />
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        <div
          className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex flex-col">
            {randomCocktail ? (
              <div>
                <img src={randomCocktail.image} alt="cocktail" />
                <div className="text-black text-center text-2xl font-bold mb-2">
                  {randomCocktail.cocktailName}
                </div>
                <div> {randomCocktail.instructions}</div>
              </div>
            ) : (
              <div> Generating cocktail....</div>
            )}
          </div>
          <div className="bg-nav px-4 py-3 text-right">
            <button
              onClick={() => {
                setShowGeneratedCocktail(false);
              }}
              type="button"
              className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
