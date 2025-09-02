import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SignInPage.css'

const SignInPage = () => {
    const Navigate = useNavigate();
    const onSignUpButtonClick = () => {
        Navigate("/")
    }
    const [FormData, setFormData] = useState({})
    const [SignInError, setSignInError] = useState("")
    const onEmailChange = (e) => {
        setFormData({ ...FormData, email: e.target.value })
    }
    const onPasswordChange = (e) => {
        setFormData({ ...FormData, password: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post("https://e-commerce-full-stack-project-backend.onrender.com/SignIn/ValidateUser", { FormData })
            .then((res) => {
                if (res.data.out) {
                    const userId = res.data.userId
                    Navigate("/HomePage", { state: { userId } })
                } else {
                    setSignInError(res.data.message || "Invalid credentials")
                    setTimeout(() => setSignInError(""), 2000)
                }
            })
            .catch((err) => {
                setSignInError("Server error. Please try again.")
                setTimeout(() => setSignInError(""), 2000)
            })
    }
    const onGoogleSignInClick = async () => {
        await axios.get("https://e-commerce-full-stack-project-backend.onrender.com/GoogleAuth/auth/google")
            .then((res) => {
                Navigate("/HomePage")
            })
            .catch((err) => {
                setSignInError("Google sign-in failed.")
                setTimeout(() => setSignInError(""), 2000)
            })
    }
    return (
        <div className="signin-bg">
            <div className="signin-main-container">
                <div className="signin-banner">
                    <i
                        className="ri-centos-fill"
                        alt="Shop with us"
                        // className="signin-illustration"
                    />
                    <h2>Welcome Back!</h2>
                    <p>Sign in to access exclusive deals and your personalized shopping dashboard.</p>
                </div>
                <div className="signin-card">
                    <div className="signin-logo">
                        <i
                        className="ri-centos-fill"
                        alt="Shop with us"
                        // className="signin-illustration"
                    />
                    </div>
                    <h2 className="signin-title">Sign In to Stuffsus</h2>
                    {SignInError && (
                        <div className="signin-error">
                            {SignInError}
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="signin-form-group">
                            <label htmlFor="Email" className="signin-label">Email</label>
                            <input
                                placeholder='Enter Email'
                                onChange={onEmailChange}
                                required
                                type="email"
                                className="signin-input"
                            />
                        </div>
                        <div className="signin-form-group">
                            <label htmlFor="Password" className="signin-label">Password</label>
                            <input
                                placeholder='Enter Password'
                                onChange={onPasswordChange}
                                required
                                type="password"
                                className="signin-input"
                            />
                        </div>
                        <input
                            type='submit'
                            value={"Sign In"}
                            className="signin-submit"
                        />
                    </form>
                    <div className="signin-or">or</div>
                    <button className="signin-google-btn" onClick={onGoogleSignInClick}>
                        <i class="ri-google-fill"></i>
                        Sign In with Google
                    </button>
                    <p className="signin-footer">
                        New Customer?{" "}
                        <button
                            type="button"
                            onClick={onSignUpButtonClick}
                            className="signin-signup-btn"
                        >
                            Sign Up
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignInPage