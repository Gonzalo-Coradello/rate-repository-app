import { Pressable } from 'react-native'
import Text from './Text'

export default function AppBarTab({ label }) {
  return (
    <Pressable>
      <Text fontWeight='bold' fontSize='subheading' color='white'>
        {label}
      </Text>
    </Pressable>
  )
}
