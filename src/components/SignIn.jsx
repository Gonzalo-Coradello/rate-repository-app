import { Button, StyleSheet, View } from 'react-native'
import FormikTextInput from './FormikTextInput'
import { Formik } from 'formik'
import theme from '../theme'

const initialValues = {
  email: '',
  password: '',
}

const SignInForm = ({ onSubmit }) => (
  <View style={styles.container}>
    <View style={styles.form}>
      <FormikTextInput name='email' placeholder='Email' />
      <FormikTextInput name='password' placeholder='Password' secure />
      <Button title='Sign in' onPress={onSubmit} />
    </View>
  </View>
)

export default function SignIn() {
  const onSubmit = values => {
    console.log(values)
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: '80%',
    justifyContent: 'center',
    // alignItems: 'center',
    marginHorizontal: 16,
  },
  form: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: 24,
    paddingVertical: 72,
    gap: 16,
    borderRadius: 4,
  },
})
