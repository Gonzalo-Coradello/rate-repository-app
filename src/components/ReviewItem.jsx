import { Alert, TouchableOpacity, View } from 'react-native'
import { format } from 'date-fns'
import { StyleSheet } from 'react-native'
import theme from '../theme'
import Text from './Text'
import { useNavigate } from 'react-router-native'
import { useMutation } from '@apollo/client'
import { DELETE_REVIEW } from '../graphql/mutations'

export default function ReviewItem({ review, ownReviews = false, refetch }) {
  const { id, text, rating, createdAt, user, repository } = review

  const navigate = useNavigate()

  const [mutate] = useMutation(DELETE_REVIEW)

  const viewRepository = () => navigate(`/${repository.id}`)

  const deleteReview = () => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            await mutate({ variables: { id } })
            refetch()
          },
        },
      ]
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.rating}>
          <Text color='primary' fontWeight='bold'>
            {rating}
          </Text>
        </View>
        <View style={styles.main}>
          <View>
            <Text fontWeight='bold'>
              {ownReviews ? repository.fullName : user.username}
            </Text>
            <Text color='textSecondary'>
              {format(new Date(createdAt), 'MM/dd/yyyy')}
            </Text>
          </View>
          <Text>{text}</Text>
        </View>
      </View>
      {ownReviews && (
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={viewRepository}>
            <Text color='white' fontWeight='bold'>
              View repository
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.deleteButton]}
            onPress={deleteReview}
          >
            <Text color='white' fontWeight='bold'>
              Delete review
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 16,
    backgroundColor: theme.colors.white,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  rating: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    gap: 4,
    flex: 1,
    marginBottom: 15,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 15,
    flex: 1,
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: theme.colors.error,
  },
})
