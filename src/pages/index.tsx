import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout home>
      <h1 className="mx-5 my-2">Recent Posts</h1>
      <div className="grid gap-6 grid-auto-fit px-5 py-5 bg-gray-100">
        {[0,1,2,3,4,5].map((k, i) => <PostCard key={`post-${k}`} title={`Post ${i}`}/>)}
      </div>

    </Layout>
  );
};

type PostCardProps = {
  title: string
}

const PostCard = ({ title }: PostCardProps) => {
  return (
    <div className="h-40 border-gray-300 border border-solid bg-white p-2 rounded flex flex-col justify-between hover:shadow-md transition duration-500 cursor-pointer">
      <div>
        image or content
      </div>
      <h2 className="self-end">{title}</h2>
    </div>
  )
}

export default Home;
