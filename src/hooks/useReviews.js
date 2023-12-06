import { useQuery } from '@apollo/client'
import { GET_CURRENT_USER } from '../graphql/queries'

const useReviews = () => {
  const { data, loading, error, refetch } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: 'cache-and-network',
    variables: { includeReviews: true },
  })

  return { reviews: data?.me?.reviews, error, loading, refetch }
}

export default useReviews
