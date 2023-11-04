import { Formik } from 'formik'
import * as yup from 'yup'
import SignInForm from './SignInForm'
import useSignIn from '../../hooks/useSignIn'

const initialValues = {
  username: '',
  password: '',
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, 'Username must be at least 4 characters')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
})

export default function SignIn() {
  const [signIn] = useSignIn()

  const onSubmit = async values => {
    const { username, password } = values

    console.log(username, password)

    try {
      const { data } = await signIn({ username, password })
      console.log(data)
      console.log(data.authenticate.accessToken)
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
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}
