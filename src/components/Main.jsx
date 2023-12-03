import { StyleSheet, View } from 'react-native'
import { RepositoryList } from './RepositoryList'
import AppBar from './AppBar'
import theme from '../theme'
import { Navigate, Route, Routes } from 'react-router-native'
import SignIn from './SignIn'
import RepositoryDetails from './RepositoryDetails'
import NewReview from './NewReview'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.background,
  },
})

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/:id' element={<RepositoryDetails />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/new_review' element={<NewReview />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </View>
  )
}

export default Main
