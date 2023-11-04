import { View, StyleSheet, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import theme from '../../theme'
import AppBarTab from './AppBarTab'
import useCurrentUser from '../../hooks/useCurrentUser'
import SignOutTab from './SignOutTab'
import useSignOut from '../../hooks/useSignOut'

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
  const { me } = useCurrentUser()
  const [signOut] = useSignOut()

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
        <AppBarTab label='Repositories' path='/' />
        {me?.username ? (
          <SignOutTab signOut={handleSignOut} />
        ) : (
          <AppBarTab label='Sign in' path='/signin' />
        )}
      </ScrollView>
    </View>
  )
}

export default AppBar
