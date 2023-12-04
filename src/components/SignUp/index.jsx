import { Formik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-native'
import SignUpForm from './SignInForm'
import useCreateUser from '../../hooks/useCreateUser'

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(5, 'Username must be at least 5 characters')
    .max(30, 'Username is too long'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Password must be at least 5 characters')
    .max(50, 'Password is too long'),
  confirmation: yup
    .string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('password'), null], "Passwords don't match"),
})

export default function SignUp() {
  const [createUser] = useCreateUser()
  const navigate = useNavigate()

  const onSubmit = async values => {
    const { username, password } = values

    try {
      await createUser({ username, password })
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
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  )
}
