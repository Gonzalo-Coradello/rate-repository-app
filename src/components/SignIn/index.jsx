import { Formik } from 'formik'
import * as yup from 'yup'
import SignInForm from './SignInForm'
import useSignIn from '../../hooks/useSignIn'
import { useNavigate } from 'react-router-native'

const initialValues = {
  username: '',
  password: '',
}

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
})

export default function SignIn() {
  const [signIn] = useSignIn()
  const navigate = useNavigate()

  const onSubmit = async values => {
    const { username, password } = values

    try {
      const { data } = await signIn({ username, password })
      console.log(data.authenticate.accessToken)
      navigate('/')
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
