import React from "react";
import Image1 from "../Assets/Background.jpg";

const Gallery = () => {
  return (
    <div className="w-full h-full max-w-full max-h-full">
      <div className="w-full h-full max-w-full max-h-full">
        {/*overly*/}
        <div className="absolute w-full h-full text-grat-200 max-h-[500px] gg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text 6ml lg:text-7xl font-bold">
            The <span className="text-blue-500">Felixson</span>{" "}
          </h1>

          <h1 className="px-4 text-4xl sm:text-5xl md:text 6ml lg:text-7xl font-bold ">
            {" "}
            Chikanda <span className="text-black-500">Hostels</span>{" "}
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src={Image1}
          alt="#"
        />
      </div>
    </div>
  );
};

export default Gallery;
