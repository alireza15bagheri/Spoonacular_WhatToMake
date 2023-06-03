import axios from "axios";

const API_KEY = "a9434d57a1904567a0036de4d5388f88";
// const API_KEY = "2c959984965940bba5cc26e92771e499";
// const API_KEY = "0f9ecb3a5cdf4720898050c8c85caf96";
// const API_KEY = "5e7c3d70fc2542bd917ee6605ff6aace";

const getRecipeByFoodName = (searchQuery) => {
  const searchRecipes = async (query, apiKey) => {
    const url = `https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${query}`;
    const response = await axios.get(url);
    return response;
  };

  return searchRecipes(searchQuery, API_KEY);

  // TO USE:
  // try {
  //   const recipes = await getRecipeByFoodName();
  //   console.log(recipes);
  // } catch (error) {
  //   console.error(error);
  // }
};

const getRandomRecipe = async () => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }

  // TO USE:
  // const recipe = await getRandomRecipe();
  // console.log(recipe);
};

const getRecipeById = async (recipeId) => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }

  // TO USE:
  // const result = await getRecipeById(itemId);
};

export { getRecipeByFoodName, getRandomRecipe, getRecipeById };
