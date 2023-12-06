import { FlatList, View, StyleSheet } from 'react-native'
import RepositoryItem from '../RepositoryItem'
import useRepositories from '../../hooks/useRepositories'
import RNPickerSelect from 'react-native-picker-select'
import { useState } from 'react'

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
  latest: { orderBy: 'CREATED_AT', orderDirection: 'DESC' },
  highestRated: { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' },
  lowestRated: { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' },
}

const ItemSeparator = () => <View style={styles.separator} />

const Picker = ({ setOrder }) => (
  <RNPickerSelect
    onValueChange={value => setOrder(value)}
    items={[
      { label: 'Latest repositories', value: orderOptions.latest },
      {
        label: 'Highest rated repositories',
        value: orderOptions.highestRated,
      },
      {
        label: 'Lowest rated repositories',
        value: orderOptions.lowestRated,
      },
    ]}
    style={{ inputAndroid: styles.inputAndroid, inputIOS: styles.inputIOS }}
  />
)

export const RepositoryListContainer = ({ repositories, setOrder }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : []

  return (
    <FlatList
      ListHeaderComponent={<Picker setOrder={setOrder} />}
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem {...item} />}
    />
  )
}

export const RepositoryList = () => {
  const [order, setOrder] = useState(orderOptions.latest)

  const { repositories } = useRepositories(
    order ? order : { orderBy: 'CREATED_AT', orderDirection: 'DESC' }
  )

  return (
    <RepositoryListContainer repositories={repositories} setOrder={setOrder} />
  )
}
