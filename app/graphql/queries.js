import { gql } from '@apollo/client';

const GET_ALL_BLOG_POST_SLUGS = gql`
query {
    blogPosts {
      data {
        attributes {
          urlSlug
        }
      }
    }
  }
`;

const GET_ALL_BLOG_POSTS = gql`
query {
    blogPosts {
      data {
        attributes {
          title
          description
          urlSlug
        }
      }
    }
  }
`;

const GET_INDIVIDUAL_POST = gql`
query ($slugUrl: String!) {
    blogPosts(filters: { urlSlug: { eq: $slugUrl } }) {
      data {
        attributes {
          title
          content
        }
      }
    }
  }
`;

const GET_ALL_RECIPE_SLUGS = gql`
query {
    recipes {
      data {
        attributes {
          urlSlug
        }
      }
    }
  }
`;

const GET_ALL_RECIPES = gql`
query {
    recipes {
      data {
        attributes {
          title
          description
          urlSlug
        }
      }
    }
  }
`;

const GET_INDIVIDUAL_RECIPE = gql`
query ($slugUrl: String!) {
    recipes(filters: { urlSlug: { eq: $slugUrl } }) {
      data {
        attributes {
          title
          content
        }
      }
    }
  }
`;

const  GET_ALL_BLOG_POSTS_AND_RECIPES = gql`
query {
  recipes {
    data {
      attributes {
        title
        description
        urlSlug
        content
      }
    }
  },
  blogPosts {
      data {
        attributes {
          title
          description
          urlSlug
        }
      }
    }
}
`

export { 
  GET_ALL_BLOG_POSTS, 
  GET_INDIVIDUAL_POST, 
  GET_ALL_BLOG_POST_SLUGS,
  GET_ALL_RECIPES,
  GET_INDIVIDUAL_RECIPE,
  GET_ALL_RECIPE_SLUGS,
  GET_ALL_BLOG_POSTS_AND_RECIPES
};