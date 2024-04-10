import { Button } from '@mui/material'

const Login = () => {
  return (
    <div className='app'>
      <div className='login'>
        <div className='login__background' />
        <div className='login__container'>
          <img src='/logo.png' alt='logo' />
          <div className='login__text'>
            <h1>Sign in to Chatty</h1>
          </div>
          <Button>Sign in with Google</Button>
        </div>
      </div>
    </div>
  )
}

export default Login
