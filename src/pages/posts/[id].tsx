import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData, getPostFromNotion } from '../../lib/posts';

export async function getStaticProps({ params }) {

  return {
    props: {
      id: params.id
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: ['/posts/test'],
    fallback: false
  }
}

export default function Post({ id }) {
  
  return (
    <Layout>
      <Head>
      </Head>

      <p>{id}</p>

    </Layout>
  );
}