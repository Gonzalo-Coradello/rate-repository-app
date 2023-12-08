import { FlatList, View, StyleSheet } from 'react-native'
import RepositoryItem from '../RepositoryItem'
import useRepositories from '../../hooks/useRepositories'
import { useState } from 'react'
import RepositoryListHeader from './RepositoryListHeader'
import { useDebounce } from 'use-debounce'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    color: 'black',
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    color: 'black',
  },
})

const orderOptions = {
  latest: {
    orderBy: 'CREATED_AT',
    orderDirection: 'DESC',
    title: 'Latest repositories',
  },
  highestRated: {
    orderBy: 'RATING_AVERAGE',
    orderDirection: 'DESC',
    title: 'Highest rated repositories',
  },
  lowestRated: {
    orderBy: 'RATING_AVERAGE',
    orderDirection: 'ASC',
    title: 'Lowest rated repositories',
  },
}

const ItemSeparator = () => <View style={styles.separator} />

export const RepositoryListContainer = ({
  repositories,
  setOrder,
  order,
  searchQuery,
  setSearchQuery,
  onEndReach,
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : []

  return (
    <FlatList
      ListHeaderComponent={
        <RepositoryListHeader
          setOrder={setOrder}
          order={order}
          orderOptions={orderOptions}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      }
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem {...item} />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
}

export const RepositoryList = () => {
  const [order, setOrder] = useState(orderOptions.latest)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchKeyword] = useDebounce(searchQuery, 500)

  const { repositories, fetchMore } = useRepositories({
    first: 5,
    ...order,
    searchKeyword,
  })

  const onEndReach = () => {
    fetchMore()
  }

  return (
    <RepositoryListContainer
      repositories={repositories}
      onEndReach={onEndReach}
      setOrder={setOrder}
      order={order}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    />
  )
}
