import { useMutation } from '@apollo/client'
import { CREATE_USER } from '../graphql/mutations'
import useSignIn from './useSignIn'

const useCreateUser = () => {
  const [mutate, result] = useMutation(CREATE_USER)
  const [signIn] = useSignIn()

  const createUser = async ({ username, password }) => {
    const { data } = await mutate({
      variables: { username, password },
    })

    console.log(data.createUser.id)

    if (data.createUser.id) {
      await signIn({ username, password })
    }

    return data
  }

  return [createUser, result]
}

export default useCreateUser
