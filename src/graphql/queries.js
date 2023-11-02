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
