import { ApolloClient, InMemoryCache } from '@apollo/client';
import React from 'react'
import { GET_ALL_RECIPE_SLUGS, GET_INDIVIDUAL_RECIPE } from '../../graphql/queries';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

const client = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache()
});

export default function Recipe({ recipe }) {
    return (
        <div>
            <h1>{recipe.title}</h1>
            <MDXRemote {...recipe.content} />
        </div>
    )
}

export async function getStaticPaths() {

    const { data } = await client.query({ query: GET_ALL_RECIPE_SLUGS });

    const paths = data.recipes.data.map((recipe) => {
        return { params: { slug: recipe.attributes.urlSlug } }
    });

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {

    const { data } = await client.query({
        query: GET_INDIVIDUAL_RECIPE,
        variables: { slugUrl: params.slug }
    });

    const attrs = data.recipes.data[0].attributes;

    const html = await serialize(attrs.content);

    return {
        props: {
            recipe: {
                title: attrs.title,
                content: html
            }
        }
    }
}

