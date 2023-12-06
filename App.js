import { NativeRouter } from 'react-router-native'
import Main from './src/components/Main'
import { StatusBar } from 'expo-status-bar'
import { ApolloProvider } from '@apollo/client'
import createApolloClient from './src/utils/apolloClient'
import AuthStorage from './src/utils/authStorage'
import AuthStorageContext from './src/contexts/AuthStorageContext'
import { PaperProvider, DefaultTheme } from 'react-native-paper'
import theme from './src/theme'

const authStorage = new AuthStorage()
const apolloClient = createApolloClient(authStorage)

const paperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
  },
}

const App = () => {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <PaperProvider theme={paperTheme}>
            <AuthStorageContext.Provider value={authStorage}>
              <Main />
            </AuthStorageContext.Provider>
          </PaperProvider>
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style='light' />
    </>
  )
}

export default App

