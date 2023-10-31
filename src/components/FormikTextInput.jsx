import { StyleSheet, View } from 'react-native'
import { useField } from 'formik'

import TextInput from './TextInput'
import Text from './Text'

const styles = StyleSheet.create({
  errorText: {
    marginTop: 6,
  },
})

const FormikTextInput = ({ name, placeholder, secure = false, ...props }) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  return (
    <View>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        placeholder={placeholder}
        secure={secure}
        {...props}
      />
      {showError && (
        <Text color='error' style={styles.errorText}>
          {meta.error}
        </Text>
      )}
    </View>
  )
}

export default FormikTextInput
