import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import ReviewForm from './ReviewForm'
import useNewReview from '../../hooks/useNewReview'
import { useNavigate } from 'react-router-native'

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: 0,
  text: '',
}

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner's username is required"),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup
    .number('Rating must be a number')
    .required('Rating is required')
    .positive('Rating must be greater than 0')
    .integer('Rating must be an integer')
    .max(100, 'Rating cannot be greater than 100'),
  text: yup.string().optional(),
})

export default function NewReview() {
  const [createReview] = useNewReview()
  const navigate = useNavigate()

  const onSubmit = async values => {
    try {
      const { data } = await createReview(values)
      const id = data.createReview.repositoryId
      console.log(id)
      navigate(`/${id}`)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  )
}
