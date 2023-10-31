import { View, Image, StyleSheet } from 'react-native'
import theme from '../theme'
import Text from './Text'
import { formatNumber } from '../utils'

export default function RepositoryItem({
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Image source={{ uri: ownerAvatarUrl }} style={styles.image} />
        <View style={styles.repositoryInfo}>
          <Text fontWeight='bold' fontSize='subheading'>
            {fullName}
          </Text>
          <Text color='textSecondary'>{description}</Text>
          <View style={styles.badge}>
            <Text color='white'>{language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.statistics}>
        <View style={styles.statistic}>
          <Text fontSize='subheading' fontWeight='bold'>
            {formatNumber(stargazersCount)}
          </Text>
          <Text color='textSecondary'>Stars</Text>
        </View>

        <View style={styles.statistic}>
          <Text fontSize='subheading' fontWeight='bold'>
            {formatNumber(forksCount)}
          </Text>
          <Text color='textSecondary'>Forks</Text>
        </View>

        <View style={styles.statistic}>
          <Text fontSize='subheading' fontWeight='bold'>
            {formatNumber(reviewCount)}
          </Text>
          <Text color='textSecondary'>Reviews</Text>
        </View>

        <View style={styles.statistic}>
          <Text fontSize='subheading' fontWeight='bold'>
            {formatNumber(ratingAverage)}
          </Text>
          <Text color='textSecondary'>Rating</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 18,
    gap: 18,
    backgroundColor: theme.colors.white,
  },
  info: {
    flexDirection: 'row',
    gap: 18,
  },
  repositoryInfo: {
    gap: 6,
    maxWidth: '80%',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  badge: {
    backgroundColor: theme.colors.badge,
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  statistics: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statistic: {
    alignItems: 'center',
  },
})
