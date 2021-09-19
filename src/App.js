import React from "react";
import "./styles.css";
import { useState } from "react";

var foodDictionary = {
  Indian: [
    {
      food: "Shahi Paneer",
      rating: "4/5",
      info:
        "Shahi paneer is a preparation of paneer, native to the Indian subcontinent, consisting of a thick gravy of cream, tomatoes and Indian spices."
    },
    {
      food: "Butter Chicken",
      rating: "4.5/5",
      info:
        "Butter chicken is a curry of chicken in a spiced tomato, butter and cream sauce. It originated in the Indian subcontinent as a curry."
    },
    {
      food: "Vindaloo",
      rating: "3/5",
      info: "Vindaloo is an Indian curry dish, which is originally from Goa."
    }
  ],
  Continental: [
    {
      food: "French Toast",
      rating: "3.5/5",
      info:
        "French toast is a dish made of sliced bread soaked in beaten eggs and typically milk, then pan fried."
    },
    {
      food: "Shepherd's Pie",
      rating: "2.5/5",
      info:
        "Shepherd's pie is a minced meat pie with a crust or topping of mashed potato it is most likely of English origin."
    },
    {
      food: "Caesar Salad",
      rating: "4.5/5",
      info:
        "A Caesar is a green salad of romaine lettuce and croutons dressed with lemon juice (or lime juice), olive oil, egg, Worcestershire sauce, anchovies, garlic, Dijon mustard, Parmesan cheese, and black pepper."
    }
  ],
  Chinese: [
    {
      food: "Zhajiangmian",
      rating: "4.5/5",
      info:
        "Zhajiangmian literally fried sauce noodles served with fried bean sauces a Chinese dish consisting of thick wheat noodles topped with zhajiang sauce."
    },
    {
      food: "Buddha's delight",
      rating: "3/5",
      info:
        "Buddha's delight is a vegetarian dish well known in Chinese and Buddhist cuisine."
    },
    {
      food: "Dim Sums",
      rating: "3.5/5",
      info:
        "Dim sum is a large range of small Chinese dishes that are traditionally enjoyed in restaurants for breakfast and lunch."
    }
  ]
};
var food = Object.keys(foodDictionary);
export default function App() {
  var [cusine, setcusine] = useState("Indian");
  function cusineClickHandler(cusine) {
    setcusine(cusine);
  }
  return (
    <div className="App">
      <h1 style={{ textAlign: "left" }}>Cuisines 🍲</h1>
      <p style={{ fontSize: "smaller" }}>
        Here are some of the cusines and dishes that I would recommend
      </p>
      {food.map((cusine) => (
        <button onClick={() => cusineClickHandler(cusine)}>{cusine}</button>
      ))}
      <hr></hr>
      <div>
        <ul>
          {foodDictionary[cusine].map((item) => (
            <li>
              <div style={{ fontSize: "1.5rem" }}>{item.food}</div>
              <div style={{ fontSize: "smaller" }}>{item.rating}</div>
              <div style={{color:"white"}}>{"x"}</div>
              <div style={{ fontSize: "12.8px" }}>{item.info}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
