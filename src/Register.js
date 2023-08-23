import React from 'react'

const Register = () => {
  return (
    <form>
    <h1>Register</h1>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" placeholder="Enter your username"/>
      
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" placeholder="Enter your password"/>
      
      <button type="submit">Register</button>
    </form>
  )
}

export default Register
