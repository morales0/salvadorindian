import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getAllRecipesWithSlug, getRecipe } from "data/contentful";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

const Recipe = ({ recipe }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(recipe);
  const ingredients = recipe?.fields?.ingredients;

  return (
    <div className="p-4">
      <h1>{recipe?.fields?.name}</h1>
      <div>{documentToReactComponents(recipe?.fields?.description)}</div>
      <h2 className="font-bold text-lg">Ingredients</h2>
      <div>
        {ingredients?.map(
          ({ sys: { id }, fields: { name, value, unit, annotation } }) => (
            <div key={id}>
              <span className="font-bold">
                {value} {unit}
              </span>
              , {name}, <span className="italic">{annotation}</span>
            </div>
          )
        )}
      </div>
      <h2 className="font-bold text-lg">Procedure</h2>
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
