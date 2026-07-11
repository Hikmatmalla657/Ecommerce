import React from 'react'
import LoginForm from '../components/login/LoginForm'

function LoginPage({ mode = 'login' }) {
  return (
    <div>
        <LoginForm mode={mode} />
    </div>
  )
}

export default LoginPage