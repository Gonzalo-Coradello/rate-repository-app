import Text from '../Text'
import { TouchableOpacity } from 'react-native'

export default function SignOutTab({ signOut }) {
  return (
    <TouchableOpacity onPress={signOut}>
      <Text fontWeight='bold' fontSize='subheading' color='white'>
        Sign out
      </Text>
    </TouchableOpacity>
  )
}
