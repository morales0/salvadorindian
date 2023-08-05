import { fetchRecipe, fetchRecipes } from "@api/recipe";

export const getRecipe = async (slug: string, preview: boolean) => {
  const recipe = await fetchRecipe(slug, preview);

  return recipe;
};

export const getAllRecipesWithSlug = async () => {
  const recipes = await fetchRecipes();

  return recipes;
};
