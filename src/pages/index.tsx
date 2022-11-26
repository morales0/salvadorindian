
import Blog from "@components/app/blog";
import { BlogPostProps } from "@components/app/blogpost-card";
import HomeSidebar from "@components/app/home-sidebar";
import Hero from "@components/ui/hero";
import Layout from "@components/ui/layout";
import { getLatestBlogPost } from "../lib/blog-api";
import styles from "../styles/Home.module.css";

// Get latest blog posts and some recipes
export const getStaticProps = async () => {
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
}

// Render home
const Home = ({ latestBlog, recentBlogs }) => {
  
  return (
    <Layout home>
      <Hero className={styles.home_hero} />

      <div className={`${styles.Home}`}>
        <Blog {...latestBlog} className={`${styles.home_blog}`} />
        <HomeSidebar recentBlogs={recentBlogs} />
      </div>
    </Layout>
  );
};


export default Home;
