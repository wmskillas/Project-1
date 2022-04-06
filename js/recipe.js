const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "X-RapidAPI-Key": "d0a8adab1emshcbaf23ad6f73065p1fa571jsneb56a6198206",
  },
};

fetch(
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=burger&diet=vegetarian&excludeIngredients=coconut&intolerances=egg%2C%20gluten&number=10&offset=0&type=main%20course",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));


var APIKey = '4f3c4ac653654ea0a6a8bcc5050be06e'

var queryRecipe = "https://api.spoonacular.com/recipes/complexSearch?apiKey=" + APIKey "&query=" + searchBar + "&cuisine=" + #Include + "&excludeCuisine=" + excludeMeal;

// API Documentation page: https://spoonacular.com/food-api/docs
