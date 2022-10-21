import React from "react";

export default function Carousel() {
  return (
    <div>
      <div
        className="carousel slide relative md:ml-48 md:mt-8"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative m-auto w-full h-4/5"></div>
          <div className="carousel-item relative m-auto w-full h-4/5">
            <img
              src="https://cl-drupal.orientaltrading.com/sites/default/files/recipes/hero/desktop/2x/pink-flamingo-cocktail-hero.jpg"
              className="m-auto w-4/6 h-4/5"
              alt="Cocktail"
            />
          </div>
          <div className="carousel-item relative m-auto w-full h-4/5">
            <img
              src="https://img.freepik.com/free-photo/glass-aperol-spritz-cocktail-swimming-pool_123827-21322.jpg?w=2000"
              className="m-auto w-4/6 h-4/5"
              alt="Cocktail"
            />
          </div>
          <div className="carousel-item relative m-auto w-full h-4/5">
            <img
              src="https://media.istockphoto.com/photos/young-bartender-pouring-cocktails-in-a-nightlife-bar-picture-id544102932?k=20&m=544102932&s=612x612&w=0&h=zrJvGS_ICnBUx2eAgWNAETXP7Fe2AMl02WTrJssDxZ4="
              className="m-auto w-4/6 h-4/5"
              alt="Cocktail"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
