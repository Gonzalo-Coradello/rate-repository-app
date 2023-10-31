import { TextInput as NativeTextInput, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 6,
    fontSize: 16,
  },
})

const TextInput = ({ style, error, placeholder, secure, ...props }) => {
  const textInputStyle = [style]

  return (
    <NativeTextInput
      placeholder={placeholder}
      secureTextEntry={secure}
      style={[
        styles.input,
        textInputStyle,
        {
          borderColor: error ? theme.colors.error : theme.colors.textSecondary,
        },
      ]}
      {...props}
    />
  )
}

export default TextInput
