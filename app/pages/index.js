import { ApolloClient, InMemoryCache } from '@apollo/client'
import Head from 'next/head'
import Link from 'next/link';
import { GET_ALL_BLOG_POSTS_AND_RECIPES } from '../graphql/queries';

export default function Home({ posts, recipes }) {
  return (
    <div>
      <Head>
        <title>My blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to the CoderBlog</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu metus turpis. Cras posuere blandit erat, eu maximus erat rutrum ac. Aenean suscipit et ligula nec feugiat. Sed maximus purus nunc, ut sagittis neque placerat ac. </p>
      <br />
      <h2>Writing</h2>
      <br />
      {posts.map((val, i) => {
        return (
          <Link key={i} href={`blog/${val.attributes.urlSlug}`}>
              <div className="card">
                <h3>{val.attributes.title}</h3>
                <p>{val.attributes.description}</p>
              </div>
          </Link>
        )
      })}
      <h2>Recipes</h2>
      <br />
      {recipes.map((val, i) => {
        return (
          <Link key={i} href={`recipe/${val.attributes.urlSlug}`}>
            <a>
              <div className="card">
                <h3>{val.attributes.title}</h3>
                <p>{val.attributes.description}</p>
              </div>
            </a>
          </Link>
        )
      })}
    </div>
  )
}

export async function getStaticProps() {

  const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: GET_ALL_BLOG_POSTS_AND_RECIPES
  });

  return {
    props: {
      posts: data.blogPosts.data,
      recipes: data.recipes.data
    }
  }
}