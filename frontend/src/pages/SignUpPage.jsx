import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './SignUpPage.css'

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
  const onWrongCases = (message) => {
    setFormCriteriaError(message)
    setTimeout(() => {
      setFormCriteriaError("")
    }, 2000);
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if ((FormData.email || "").includes("@")) {
      const password = FormData.password || ""
      if (
        password.length >= 8 &&
        /[a-z]/.test(password) &&
        /[A-Z]/.test(password) &&
        /\d/.test(password) &&
        /[!@#$%^&*]/.test(password)
      ) {
        if ((FormData.password) === RePassword) {
          await axios.post("https://e-commerce-full-stack-project-backend.onrender.com/SignUp/AddUser", { FormData })
            .then((res) => {
              if (res.data.out === true) {
                onWrongCases(res.data.message)
              }
              else {
                Navigate("/SignInPage")
              }
            })
            .catch((err) => {
              onWrongCases("Server error. Please try again.")
            })
        }
        else {
          onWrongCases("Passwords don't match")
        }
      }
      else {
        onWrongCases("Password doesn't meet specified criteria")
      }
    }
    else {
      onWrongCases("Please enter a valid email")
    }
  }
  return (
    <div className="signup-bg">
      <div className="signup-main-container">
        <div className="signup-banner">
          <i className="ri-user-add-fill signup-illustration"></i>
          <h2>Join Stuffsus!</h2>
          <p>Create your account to unlock exclusive offers, fast delivery, and a personalized shopping experience.</p>
        </div>
        <div className="signup-card">
          <div className="signup-logo">
            <i className="ri-centos-fill"></i>
          </div>
          <h2 className="signup-title">Create Your Account</h2>
          {FormCriteriaError && (
            <div className="signup-error">
              {FormCriteriaError}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="signup-form-group">
              <label htmlFor="Name" className="signup-label">Name</label>
              <input
                placeholder='Enter Name'
                onChange={onNameChange}
                required
                className="signup-input"
              />
            </div>
            <div className="signup-form-group">
              <label htmlFor="Email" className="signup-label">Email</label>
              <input
                placeholder='Enter Email'
                onChange={onEmailChange}
                required
                type="email"
                className="signup-input"
              />
            </div>
            <div className="signup-form-group">
              <label htmlFor="Password" className="signup-label">Password</label>
              <input
                placeholder='Enter Password'
                onChange={onPasswordChange}
                required
                type="password"
                className="signup-input"
              />
            </div>
            <div className="signup-form-group">
              <label htmlFor="RePassword" className="signup-label">Re-Enter Password</label>
              <input
                placeholder='Re-Enter Password'
                onChange={onRePasswordChange}
                required
                type="password"
                className="signup-input"
              />
            </div>
            <input
              type='submit'
              value={"Sign Up"}
              className="signup-submit"
            />
          </form>
          <p className="signup-footer">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => Navigate("/SignInPage")}
              className="signup-signin-btn"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage