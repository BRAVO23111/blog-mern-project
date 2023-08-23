import React from 'react'

const Login = () => {
  return (
    <form>
    <h1>Login</h1>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" placeholder="Enter your username"/>
      
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" placeholder="Enter your password"/>
      
      <button type="submit">Login</button>
    </form>
  )
}

export default Login
