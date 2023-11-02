import { Button, StyleSheet, View } from 'react-native'
import FormikTextInput from '../FormikTextInput'
import theme from '../../theme'

export default function SignInForm({ onSubmit }) {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <FormikTextInput name='email' placeholder='Email' />
        <FormikTextInput name='password' placeholder='Password' secure />
        <Button title='Sign in' onPress={onSubmit} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: '80%',
    justifyContent: 'center',
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
