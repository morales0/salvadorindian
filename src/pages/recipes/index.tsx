import { GetStaticProps } from "next";
import Layout from "../../components/ui/layout/layout";
import { getAllRecipesWithSlug } from "data/contentful";
import Link from "next/link";

const Recipes = ({ recipesData }) => {
  return (
    <div className="p-4">
      {recipesData.map((r) => (
        <Link
          key={r.slug}
          href={`recipes/${r.slug}`}
          className="underline text-amber-600"
        >
          {r.name}
        </Link>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allRecipes = await getAllRecipesWithSlug();
  const recipesData = allRecipes.items.map((item) => ({
    name: item.fields.name,
    slug: item.fields.slug,
  }));

  return {
    props: {
      recipesData,
    },
  };
};

export default Recipes;
