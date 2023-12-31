import { Button, StyleSheet, View } from 'react-native'
import FormikTextInput from '../FormikTextInput'
import theme from '../../theme'

export default function SignInForm({ onSubmit }) {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <FormikTextInput name='username' placeholder='Username' />
        <FormikTextInput name='password' placeholder='Password' secure />
        <Button title='Sign in' onPress={onSubmit} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    backgroundColor: theme.colors.white,
    padding: 24,
    paddingTop: 36,
    gap: 16,
    borderRadius: 4,
  },
})
