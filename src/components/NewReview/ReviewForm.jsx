import { View, StyleSheet, Button } from 'react-native'
import React from 'react'
import theme from '../../theme'
import FormikTextInput from '../FormikTextInput'

export default function ReviewForm({ onSubmit }) {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <FormikTextInput name='ownerName' placeholder='Repository owner name' />
        <FormikTextInput name='repositoryName' placeholder='Repository name' />
        <FormikTextInput name='rating' placeholder='Rating between 0 and 100' />
        <FormikTextInput name='review' placeholder='Review' multiline />
        <Button title='Create review' onPress={onSubmit} />
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
    paddingHorizontal: 24,
    paddingVertical: 24,
    gap: 16,
  },
})
