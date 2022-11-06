import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

const mockPostData = [
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

const currentBlogPost = {
  title: 'Welcome to SalvadorIndian',
  date: 'October 23, 2022',
  tags: ['General'],
  content: `
    Hello, and welcome! This is the first blog of Salvadorindian, created by Carolyn and Francisco.

    We will post all sorts of fun fusion stuff salvadoran x indian, especially homemade recipes like pupusas and somasas :)

    Stay tuned!
  `
}

const Home: NextPage = () => {
  return (
    <Layout home>
      <div className="m-auto py-4 px-8 flex flex-wrap gap-8">
        <Blog {...currentBlogPost} />
        <HomeSidebar>
          <h1>Recent Blogs</h1>
          <hr className="border-t-2 mb-3 border-gray-200"/>

          <div className="flex flex-wrap gap-4">
            {mockPostData.map((post, i) => (
              <BlogPostCard
                key={`index-post-card-${i}`}
                {...post}
              />
            ))}
          </div>
        </HomeSidebar>
      </div>
    </Layout>
  );
};
type BlogProps = {
  title: string,
  date: string,
  tags: string[],
  content: string
}

const Blog = ({ title, date, tags, content }: BlogProps) => {
  return (
    <div className={`${styles.home_blog}`}>
      <header>
        <h1>{title}</h1>
        <hr className="border-t-2 mb-3 border-gray-200"/>
        <div>{date}</div>
        <div>
          <span>Tags:</span>
        </div>
      </header>
      <article>
        {content}
      </article>
    </div>
  )
}

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
  children: React.ReactNode
}

const HomeSidebar = ({ children }: HomeSidebarProps) => {
  return (
    <aside className={`${styles.home_aside}`}>
      {children}
    </aside>
  )
}

export default Home;
