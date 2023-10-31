import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme'
import AppBarTab from './AppBarTab'

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 20,
    backgroundColor: theme.colors.textPrimary,
  },
  contentContainer: {
    flexDirection: 'row',
    gap: 20,
    paddingVertical: 20,
  },
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <AppBarTab label='Repositories' />
      </View>
    </View>
  )
}

export default AppBar
