import room1 from "../Assets/room1.jpeg";
import room2 from "../Assets/room2.jpeg";
import room3 from "../Assets/room3.jpeg";
import room4 from "../Assets/room1.jpeg";

const cardData = [
  {
    id: 1,
    img: room1,
    type: "Double Room",
    price: "MKW 45,000.00",
    floor: "First Floor",
    position: "Window-View",
    contained: "Not Self-Contained",
  },

  {
    id: 2,
    img: room2,
    type: "Double Room",
    price: "MKW 45,000.00",
    floor: "Second Floor",
    position: "",
    contained: "Not Self-Contained",
  },

  {
    id: 3,
    img: room3,
    type: "Single Room",
    price: "MKW 65,000.00",
    floor: "Third Floor",
    position: "window-view",
    contained: "Self-Contained",
  },

  {
    id: 4,
    img: room4,
    type: "Triple Room",
    price: "MKW 35,000.00",
    floor: "First Floor",
    position: "",
    contained: "Not Self-Contained",
  },
];

export default cardData;
