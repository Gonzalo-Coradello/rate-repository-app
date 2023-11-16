import { REPOSITORY_DETAILS } from './fragments'

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
      ...RepositoryDetails
    }
  }

  ${REPOSITORY_DETAILS}
`

export const GET_CURRENT_USER = gql`
  query {
    me {
      username
    }
  }
`
