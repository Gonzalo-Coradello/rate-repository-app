import { FlatList } from 'react-native'
import React from 'react'
import useReviews from '../hooks/useReviews'
import ReviewItem from './ReviewItem'

export default function MyReviews() {
  const { reviews } = useReviews()
  const reviewNodes = reviews ? reviews?.edges?.map(edge => edge.node) : []

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} ownReviews />}
      keyExtractor={({ id }) => id}
    />
  )
}
