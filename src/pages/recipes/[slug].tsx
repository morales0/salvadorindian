import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getAllRecipesWithSlug, getRecipe } from "data/contentful";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

const Recipe = ({ recipe }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <h1>{recipe?.fields?.name}</h1>
      <div>{documentToReactComponents(recipe?.fields?.description)}</div>
      <h2>Procedure</h2>
      <div>{documentToReactComponents(recipe?.fields?.procedure)}</div>
    </div>
  );
};

// Extract data from recipe and pass as props to page component
export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const recipe = await getRecipe(params.slug as string, preview);

  return {
    props: {
      preview,
      recipe,
    },
  };
};

// Create static paths for this endpoint
export const getStaticPaths: GetStaticPaths = async () => {
  const allRecipes = await getAllRecipesWithSlug();
  return {
    paths:
      allRecipes?.items?.map(({ sys, fields }) => `/recipes/${fields.slug}`) ??
      [],
    fallback: true,
  };
};

export default Recipe;
