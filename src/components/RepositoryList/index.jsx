import { FlatList, View, StyleSheet } from 'react-native'
import RepositoryItem from '../RepositoryItem'
import useRepositories from '../../hooks/useRepositories'
import { useState } from 'react'
import { Menu, Button } from 'react-native-paper'

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

const Picker = ({ setOrder, order }) => {
  const [visible, setVisible] = useState(false)

  return (
    <Menu
      visible={visible}
      onDismiss={() => setVisible(false)}
      anchor={<Button onPress={() => setVisible(true)}>{order.title}</Button>}
      style={{
        paddingTop: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Menu.Item
        onPress={() => {
          setOrder(orderOptions.latest)
          setVisible(false)
        }}
        title={orderOptions.latest.title}
      />
      <Menu.Item
        onPress={() => {
          setOrder(orderOptions.highestRated)
          setVisible(false)
        }}
        title={orderOptions.highestRated.title}
      />
      <Menu.Item
        onPress={() => {
          setOrder(orderOptions.lowestRated)
          setVisible(false)
        }}
        title={orderOptions.lowestRated.title}
      />
    </Menu>
  )
}

export const RepositoryListContainer = ({ repositories, setOrder, order }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : []

  return (
    <FlatList
      ListHeaderComponent={<Picker setOrder={setOrder} order={order} />}
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
    <RepositoryListContainer
      repositories={repositories}
      setOrder={setOrder}
      order={order}
    />
  )
}
