import Text from '../Text'
import { Link } from 'react-router-native'

export default function AppBarTab({ label, path }) {
  return (
    <Link to={path}>
      <Text fontWeight='bold' fontSize='subheading' color='white'>
        {label}
      </Text>
    </Link>
  )
}
