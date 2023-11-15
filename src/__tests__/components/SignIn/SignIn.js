import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react-native'
import { Formik } from 'formik'
import SignInForm from '../../../components/SignIn/SignInForm'
// ...

describe('SignIn', () => {
  describe('SignInForm', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn()
      const initialValues = { username: '', password: '' }
      const credentials = { username: 'kalle', password: 'password' }

      render(
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
      )

      act(() => {
        fireEvent.changeText(
          screen.getByPlaceholderText('Username'),
          credentials.username
        )
        fireEvent.changeText(
          screen.getByPlaceholderText('Password'),
          credentials.password
        )
        fireEvent.press(screen.getByText('Sign in'))
      })

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1)
        expect(onSubmit.mock.calls[0][0]).toEqual(credentials)
      })
    })
  })
})
