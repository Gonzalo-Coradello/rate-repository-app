import { useApolloClient, useMutation } from '@apollo/client'
import { SIGN_IN } from '../graphql/mutations'
import useAuthStorage from './useAuthStorage'

const useSignIn = () => {
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()

  const [mutate, result] = useMutation(SIGN_IN, {
    fetchPolicy: 'network-only',
  })

  const signIn = async ({ username, password }) => {
    const result = await mutate({
      variables: { credentials: { username, password } },
    })
    const accessToken = result.data.authenticate.accessToken
    await authStorage.setAccessToken(accessToken)
    await apolloClient.resetStore()
    return result
  }

  return [signIn, result]
}

export default useSignIn
