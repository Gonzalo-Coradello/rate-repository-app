import { View } from 'react-native'
import { format } from 'date-fns'
import { StyleSheet } from 'react-native'
import theme from '../theme'
import Text from './Text'

export default function ReviewItem({ review, ownReviews = false }) {
  const { text, rating, createdAt, user, repository } = review

  return (
    <View style={styles.container}>
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
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 16,
    backgroundColor: theme.colors.white,
    marginTop: 10,
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
  },
})
