import React from "react";
import TheRoomCard from "./Components/FilterRooms";
import Gallery from "./Components/Gallery";
import BackgroundImage from "../src/Assets/Background.jpg";

function App() {
  return (
    <div>
      <div
        className="flex flex-col min-h-screen"
        style={{ BackgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="flex-grow mt-16">
          <Gallery /> {/* Added mt-16 to push content below the navbar */}
          <TheRoomCard />
        </div>
      </div>
    </div>
  );
}

export default App;
