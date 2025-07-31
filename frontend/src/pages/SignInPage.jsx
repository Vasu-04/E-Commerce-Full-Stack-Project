import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignInPage = () => {
    const Navigate = useNavigate();
    const onSignUpButtonClick = () => {
        Navigate("/")
    }
    const [FormData, setFormData] = useState({})
    const onEmailChange = (e) => {
        setFormData({ ...FormData, email: e.target.value })
    }
    const onPasswordChange = (e) => {
        setFormData({ ...FormData, password: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("FormData at line 19 signInPage.jsx", FormData)
        await axios.post("https://e-commerce-full-stack-project-backend.onrender.com/SignIn/ValidateUser", { FormData })
            .then((res) => {
                console.log("res at line 22 signInPage.jsx", res)
                if (res.data.out) {
                    const userId = res.data.userId
                    Navigate("/HomePage", { state: {userId} })
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const onGoogleSignInClick = async ()=>{
        await axios.get("https://e-commerce-full-stack-project-backend.onrender.com/GoogleAuth/auth/google")
        .then((res)=>{
            console.log("User Logged In Succesfully : RES",res)
            Navigate("/HomePage")
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Email">Email</label>
                <input placeholder='Enter Email' onChange={onEmailChange}></input><br />
                <label htmlFor="Password">Password</label>
                <input placeholder='Enter Password' onChange={onPasswordChange}></input><br />
                <input type='submit' value={"Sign In"}></input>
            </form>
            <p>New Customer ?<button onClick={onSignUpButtonClick}>Sign Up</button></p>
            <div>
                or
            </div>
            <button onClick={onGoogleSignInClick}>Sign In with Google</button>
        </div>
    )
}

export default SignInPage
