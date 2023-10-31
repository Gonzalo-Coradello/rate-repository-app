import { View, Text } from 'react-native'
import React from 'react'

export default function RepositoryItem({
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
}) {
  return (
    <View>
      <Text>Full name: {fullName}</Text>
      <Text>Description: {description}</Text>
      <Text>Language: {language}</Text>
      <Text>Stars: {stargazersCount}</Text>
      <Text>Forks: {forksCount}</Text>
      <Text>Reviews: {reviewCount}</Text>
      <Text>Rating: {ratingAverage}</Text>
    </View>
  )
}
