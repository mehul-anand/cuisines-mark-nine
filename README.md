# cuisines-mark-nine
A web app made with React JS which recommends you dishes according to the cuisine the user chose

## Contents 
- Header
- Buttons to choose the cuisine
- List of dishes from the chosen cuisine

## Working
-  we have a header and an introduction
-  then 3 buttons (cuisines)
-  and then the names of the dishes based on the cuisine the user clicked/chose
### To dsiplay the buttons for user to choose the cuisine
- First we will take out all the cuisines(keys) from the food dictionary we made
- To do this we will use `Object.keys` 👉 `var food = Object.keys(foodDictionary);`
- Now we have a list of cuisines which were the keys in our food dictionary
- Here we will use `map` to access the elements in food list and then use this function in `map` to display all the cuisines inside a `div`
- All these cuisine buttons are clickable i.e we are using `onClick` to call a function which will display the dishes from that cuisine and their respective ratings when the user clicks them (buttons)
### When user clicks on a cuisine button
- Here we wull use `set` ans and `useState`
- Here we used `var [cusine, setcusine] = useState("Indian");` 
- Here `cusine` is a **parameter** and `setcusine` will be used to **update the cuisine**
### When the function is called on clicking a button
- by default `cusine` will have have the same value as in the `()` 👉 `useState(here)`
- then to update the meaning we can use `setcusine(cusine);`
### Display the dishes
- once we have set the cusine name to the one that the user chose , we will get the values from the cuisines(keys) from our dictionary
- Our dictionary looks like this 👇

`var foodDictionary = {
  Indian: [
    {
      food: "Shahi Paneer",
      rating: "4/5",
      info:
        "Shahi paneer is a preparation of paneer, native to the Indian subcontinent, consisting of a thick gravy of cream, tomatoes and Indian spices."
    },
    {
      : "Butter Chicken",---------------`
- Then we use `[]` to use the cuisine(key) to get the dishes(value) and then use `map` to extract the dishes individualy from the list of dishes we got from `map` 👉 ` {foodDictionary[cusine].map((item)`
- Then we used `item.food` , `item.rating` & `item.info` to display the name of the dish , it's rating and a brief about the dish
- Also we are using `<ul>` -> Unordered List and used `list-style:none` to hide the bullets along with adding border color and width
### Resources
- [onChange](https://www.w3schools.com/jsref/event_onchange.asp)
- [onClick](https://www.w3schools.com/jsref/event_onclick.asp)
- [useState and set](https://stackoverflow.com/questions/53165945/what-is-usestate-in-react)
- [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [ul](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)
- [list-style](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)


