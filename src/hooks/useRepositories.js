import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = ({
  orderBy = 'CREATED_AT',
  orderDirection = 'DESC',
  searchKeyword = '',
}) => {
  const { data, loading, error, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { orderBy, orderDirection, searchKeyword },
  })

  return { repositories: data?.repositories, error, loading, refetch }
}

export default useRepositories
