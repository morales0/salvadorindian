import { BASE_URL } from "./constants";
import client from "@api/client";

export const fetchRecipes = async () => {
  const entries = await client.getEntries({ content_type: "recipe" });

  return entries;
};

export const fetchRecipe = async (slug: string) => {
  const recipe = await client
    .getEntries({
      content_type: "recipe",
      "fields.slug": slug,
      limit: 1,
    })
    .then((e) => e.items[0]);

  return recipe;
};

// Fetch code
/*
  return fetch(`${BASE_URL}/entries?content_type=recipe`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
  }).then((resp) => resp.json());
  */

/*
  return fetch(`${BASE_URL}/entries?content_type=recipe&fields.slug=${slug}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
  }).then((resp) => resp.json());
  */
