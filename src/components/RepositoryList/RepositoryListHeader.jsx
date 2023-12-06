import { StyleSheet, View } from 'react-native'
import { useState } from 'react'
import { Menu, Button, Searchbar } from 'react-native-paper'

export default function RepositoryListHeader({
  order,
  setOrder,
  orderOptions,
  searchQuery,
  setSearchQuery,
}) {
  const [visible, setVisible] = useState(false)
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder='Search'
        onChangeText={text => setSearchQuery(text)}
        value={searchQuery}
        autoCapitalize='none'
        autoCompleteType='off'
        textContentType='none'
        autoCorrect={false}
      />
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
})
