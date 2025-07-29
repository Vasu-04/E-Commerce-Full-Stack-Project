import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignUpPage = () => {
  const Navigate = useNavigate();


  const [FormCriteriaError, setFormCriteriaError] = useState("")
  const [FormData, setFormData] = useState({})
  const [RePassword, setRePassword] = useState("")
  const onNameChange = (e) => {
    setFormData({ ...FormData, name: e.target.value })
  }
  const onEmailChange = (e) => {
    setFormData({ ...FormData, email: e.target.value })
  }
  const onPasswordChange = (e) => {
    setFormData({ ...FormData, password: e.target.value })
  }
  const onRePasswordChange = (e) => {
    setRePassword(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()

    await axios.post("http://localhost:3000/SignUp/AddUser", { FormData })
      .then((res) => {
        if (res.data.out === true) {
          setFormCriteriaError(res.data.message)
        }
        else {
          Navigate("/SignInPage")
        }
        console.log(res, "FROM SIGNUPPAGE.JSX LINE 34")
      })
      .catch((err) => {
        console.log(err, "IN SIGNUPPAGE.JSX LINE 37");
      })
  }
  return (
    <div>
      <div>{FormCriteriaError}</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">Name </label>
        <input placeholder='Enter Name' onChange={onNameChange}></input><br />
        <label htmlFor="Email">Email</label>
        <input placeholder='Enter Email' onChange={onEmailChange}></input><br />
        <label htmlFor="Password">Password</label>
        <input placeholder='Enter Password' onChange={onPasswordChange}></input><br />
        <label htmlFor="RePassword">Re-Enter Password</label>
        <input placeholder='Re-Enter Password' onChange={onRePasswordChange}></input><br />
        <input type='submit' value={"Sign Up"}></input>
      </form>
      <p>Already Registered ?<button onClick={() => Navigate("/SignInPage")}>Sign In</button></p>
    </div>
  )
}

export default SignUpPage
