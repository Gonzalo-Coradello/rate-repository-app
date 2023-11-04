import { useQuery } from '@apollo/client'
import { GET_CURRENT_USER } from '../graphql/queries'

const useCurrentUser = () => {
  const { data, loading, error, refetch } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: 'cache-and-network',
  })

  return { me: data?.me, error, loading, refetch }
}

export default useCurrentUser
