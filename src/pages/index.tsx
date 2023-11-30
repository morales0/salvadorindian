import Blog from "@/components/app/blog";
import { BlogPostProps } from "@/components/app/blogpost-card";
import HomeSidebar from "@/components/app/home-sidebar";
import Hero from "@/components/ui/hero";
import Layout from "@/components/ui/layout/layout";
// import { getLatestBlogPost } from "../lib/blog-api";
import styles from "../styles/Home.module.css";
import RecipeCard from "@/components/app/recipe-card";
import plantyouSalad from "@/assets/plantyou-test-salad.jpg";
import plantyouBowl from "@/assets/plantyou-test-bowl.jpg";
import plantyouFruit from "@/assets/plantyou-test-fruits.jpg";

// Get latest blog posts and some recipes
/* export const getStaticProps = async () => {
  // use api to get blogs
  const latestBlog = await getLatestBlogPost()
  const recentBlogs: BlogPostProps[] = [
    {
      title: 'Pupusas',
      date: '10-23-2022',
      preview: 'This is a preview for an amazing article on pupusas!'
    },
    {
      title: 'Samosas',
      date: '9-23-2022',
      preview: 'This is a preview for an amazing article on samosas!'
    }
  ]

  return {
    props: {
      latestBlog,
      recentBlogs
    }
  }
} */

// Render home
const Home = () => {
  return (
    <div className="lg:container lg:mx-auto">
      <div className="flex gap-4 justify-around items-start">
        <RecipeCard
          name="Mixed salad"
          type="side dish"
          tags={["Vegan", "Vegetarian", "Salad"]}
          image={plantyouSalad}
        />
        <RecipeCard
          name="Full bowl"
          type="main"
          tags={["Vegetarian", "Bowl", "Protein"]}
          image={plantyouBowl}
        />
        <RecipeCard
          name="Fruit salad"
          type="dessert"
          tags={["Bowl", "Breakfast", "Fruit"]}
          image={plantyouFruit}
        />
      </div>

      <div className="flex">
        <div className="w-1/2">
          {/* Latest Blog Post */}
          <div className="bg-white p-4 mb-4">
            <h2 className="text-xl font-bold mb-2">Latest Blog Post</h2>
            <p className="text-gray-500 mb-4">October 23, 2022</p>
            <p className="text-gray-700">
              This is a preview for an amazing article on pupusas!
            </p>
          </div>
          {/* Latest Recipe */}
          <div className="bg-white p-4 mb-4">
            <h2 className="text-xl font-bold mb-2">Latest Recipe</h2>
            <p className="text-gray-500 mb-4">October 23, 2022</p>
            <p className="text-gray-700">
              This is a preview for an amazing recipe on pupusas!
            </p>
          </div>
        </div>
        <div className="w-1/2">
          {/* Latest Blog Post */}
          <div className="bg-white p-4 mb-4">
            <h2 className="text-xl font-bold mb-2">Latest Blog Post</h2>
            <p className="text-gray-500 mb-4">October 23, 2022</p>
            <p className="text-gray-700">
              This is a preview for an amazing article on pupusas!
            </p>
          </div>
          {/* Latest Recipe */}
          <div className="bg-white p-4 mb-4">
            <h2 className="text-xl font-bold mb-2">Latest Recipe</h2>
            <p className="text-gray-500 mb-4">October 23, 2022</p>
            <p className="text-gray-700">
              This is a preview for an amazing recipe on pupusas!
            </p>
          </div>
        </div>
      </div>

      {/* Recent Blogs */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Blogs</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4">
            <h3 className="text-lg font-bold mb-2 bg-gray-900 text-white p-2">
              Blog Title 1
            </h3>
            <div className="h-40 bg-gray-200 mb-4"></div>
            <p className="text-gray-500">October 23, 2022</p>
          </div>
          <div className="bg-white p-4">
            <h3 className="text-lg font-bold mb-2 bg-gray-900 text-white p-2">
              Blog Title 2
            </h3>
            <div className="h-40 bg-gray-200 mb-4"></div>
            <p className="text-gray-500">October 23, 2022</p>
          </div>
          <div className="bg-white p-4">
            <h3 className="text-lg font-bold mb-2 bg-gray-900 text-white p-2">
              Blog Title 3
            </h3>
            <div className="h-40 bg-gray-200 mb-4"></div>
            <p className="text-gray-500">October 23, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
