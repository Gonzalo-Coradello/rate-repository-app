import React from 'react'
import { Formik } from 'formik'
import ReviewForm from './ReviewForm'

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  review: '',
}

export default function NewReview() {
  const onSubmit = async values => {
    console.log(values)
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      // validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  )
}
