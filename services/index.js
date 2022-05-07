import { graphql } from 'graphql';
import { request, gql } from 'graphql-request';

export const getPosts = async () => {

  const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;


  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              id
              name
              photo {
                url
              }
            }
            createdAt
            slug
            title
            expert
            featuredimage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.postsConnection.edges;
}