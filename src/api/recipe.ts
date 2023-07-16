import { BASE_URL } from "./constants";

export const fetchRecipes = async () => {
  return fetch(`${BASE_URL}/entries?content_type=recipe`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
  }).then((resp) => resp.json());
};

export const fetchRecipe = async (slug) => {
  return fetch(`${BASE_URL}/entries?content_type=recipe&fields.slug=${slug}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
  }).then((resp) => resp.json());
};
