import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getAllRecipesWithSlug, getRecipe } from "data/contentful";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";

const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const Recipe = ({
  recipe,
  preview,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(recipe, preview);
  const name = recipe?.fields?.name;
  const description = documentToReactComponents(recipe?.fields?.description);
  const procedure = documentToReactComponents(recipe?.fields?.procedure);
  const ingredients = recipe?.fields?.ingredients;
  const ingredientsList = ingredients?.map(
    ({ sys: { id }, fields: { name, value, unit, annotation } }) => (
      <div key={id}>
        <span className="font-bold">
          {value} {unit}
        </span>
        , {name}, <span className="italic">{annotation}</span>
      </div>
    )
  );

  return (
    <div className="p-4">
      <div className="max-w-3xl mx-auto bg-amber-50 rounded-md shadow-md p-8">
        <h1 className="text-3xl text-center font-bold mb-4">{name}</h1>
        <Image
          className="mx-auto my-2"
          loader={contentfulLoader}
          width={400}
          height={0}
          src={recipe?.fields?.hero.fields.file.url}
          alt={recipe?.fields?.hero.fields.title}
        />
        <div className="text-gray-600 mb-6">{description}</div>

        <h2 className="text-xl font-bold mb-2">Ingredients</h2>
        <ul className="list-disc pl-6 mb-6">{ingredientsList}</ul>

        <h2 className="text-xl font-bold mb-2">Procedure</h2>
        <div className=" pl-6">{procedure}</div>
      </div>
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
