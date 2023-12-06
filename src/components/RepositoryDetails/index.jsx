import { FlatList } from 'react-native'
import { useParams } from 'react-router-native'
import useRepository from '../../hooks/useRepository'
import RepositoryItem from '../RepositoryItem'
import ReviewItem from '../ReviewItem'

export default function RepositoryDetails() {
  const { id } = useParams()
  const { repository } = useRepository(id)

  const reviews = repository?.reviews
    ? [...repository.reviews.edges.map(edge => edge.node)]
    : []

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryItem {...repository} hasButton />}
    />
  )
}
