
const options = {
  method: "POST",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "d0a8adab1emshcbaf23ad6f73065p1fa571jsneb56a6198206",
  },
  body: '{\n  "ingredients": [\n    "eggs",\n    "bacon"\n  ],\n  "servings": 2,\n}',
};

fetch(
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/map",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

var APIKey = '4f3c4ac653654ea0a6a8bcc5050be06e'

// API Documentation page: https://spoonacular.com/food-api/docs