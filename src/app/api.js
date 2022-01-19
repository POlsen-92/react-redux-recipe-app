export const fetchRecipes = async () => {
    const recipes = await fetch('api/recipes');
    return recipes.json();
  }