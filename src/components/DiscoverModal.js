import React from "react";

export default function DiscoverModal({
  discoverCocktailInfo,
  setShowCocktailModal,
}) {
  return (
    <div
      className="fixed z-10 top-0 w-full md:left-0 overflow-y-auto"
      id="modal"
    >
      <div className="flex items-center justify-center h-3/4 pt-4 px-4 pb-20 text-center sm:block sm:p-2">
        <div className="fixed inset-0 transition-opacity overflow-y-auto no-scrollbar">
          <div className="absolute inset-0 bg-gray-500 opacity-20 max-h-max" />
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>
          <div
            className="inline-block bg-white rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:overflow-y-auto m-8 "
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-2 inline-block h-2/3">
              {discoverCocktailInfo ? (
                <div>
                  <img src={discoverCocktailInfo.image} alt="cocktail" />
                  <div className="text-black text-center text-2xl font-bold mb-2">
                    {discoverCocktailInfo.cocktailName}
                  </div>
                  <div className="font-bold text-lg">Ingredients</div>
                  <ul>
                    {discoverCocktailInfo.ingredients.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <div className="font-bold text-lg">Instructions</div>

                  <div> {discoverCocktailInfo.instructions}</div>
                </div>
              ) : (
                <div> Loading..</div>
              )}
            </div>
            <div className="bg-nav px-2 py-2 text-right">
              <button
                onClick={() => {
                  setShowCocktailModal(false);
                }}
                type="button"
                className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2 mb-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
