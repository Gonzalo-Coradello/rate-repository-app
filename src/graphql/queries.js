import { REPOSITORY_DETAILS, REPOSITORY_WITH_REVIEWS } from './fragments'

const { gql } = require('@apollo/client')

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ...RepositoryDetails
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
`

export const GET_REPOSITORY = gql`
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...RepositoryWithReviews
    }
  }

  ${REPOSITORY_WITH_REVIEWS}
`

export const GET_CURRENT_USER = gql`
  query {
    me {
      username
    }
  }
`
