const { gql } = require('@apollo/client')

// export const GET_REPOSITORIES = gql`
//   query {
//     repositories {

//     }
//   }
// `

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          fullName
          description
          language
          forksCount
          stargazersCount
          ratingAverage
          reviewCount
          ownerAvatarUrl
        }
      }
    }
  }
`
