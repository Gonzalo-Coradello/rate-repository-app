import { View } from 'react-native'
import { useParams } from 'react-router-native'
import useRepository from '../hooks/useRepository'
import RepositoryItem from './RepositoryItem'

export default function RepositoryDetails() {
  const { id } = useParams()
  const { repository } = useRepository(id)

  return (
    <View>
      <RepositoryItem {...repository} hasButton />
    </View>
  )
}
