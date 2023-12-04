import { useMutation } from '@apollo/client'
import { CREATE_REVIEW } from '../graphql/mutations'

const useNewReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW)

  const createReview = async review => {
    const { repositoryName, ownerName, rating, text } = review

    const result = await mutate({
      variables: { repositoryName, ownerName, rating: +rating, text },
    })

    return result
  }

  return [createReview, result]
}

export default useNewReview
