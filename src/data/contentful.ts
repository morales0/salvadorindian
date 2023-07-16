import { fetchRecipe, fetchRecipes } from "@api/recipe";

export type GetRecipe = (slug: string, preview: boolean) => Promise<any>;
export const getRecipe: GetRecipe = async (slug, preview) => {
  const recipe = await fetchRecipe(slug);

  return recipe?.items?.[0] ?? ({} as any);
};

export type GetAllRecipesWithSlug = () => Promise<any>;
export const getAllRecipesWithSlug: GetAllRecipesWithSlug = async () => {
  const recipes = await fetchRecipes();

  return recipes;
};
