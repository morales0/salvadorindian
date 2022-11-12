
import Blog from "@components/app/blog";
import Layout from "@components/layout";
import Hero from "@components/ui/hero";
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



type BlogPostProps = {
  title: string,
  date: string,
  preview: string
}

const BlogPostCard = ({ title, date, preview }: BlogPostProps) => {
  return (
    <div className={`
      cursor-pointer
    `}>
      <h2 className="font-bold text-lg">{title}</h2>
      <span className="text-xs text-gray-500">{date}</span>
      <p>{preview}</p>
    </div>
  )
}

type HomeSidebarProps = {
  recentBlogs: BlogPostProps[]
}

const HomeSidebar = ({ recentBlogs }: HomeSidebarProps) => {
  return (
    <aside className={`${styles.home_aside}`}>
      <div>
        <h1>Recent Blogs</h1>
        <hr className="border-t-2 mb-3 border-gray-200" />
        <div className="flex flex-wrap gap-4">
          {recentBlogs.map((post, i) => (
            <BlogPostCard
              key={`index-post-card-${i}`}
              {...post}
            />
          ))}
        </div>
      </div>
    </aside>
  )
}

export default Home;
