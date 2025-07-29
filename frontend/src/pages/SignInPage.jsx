import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignInPage = () => {
    const Navigate = useNavigate();
    const onSignUpButtonClick = ()=>{
        Navigate("/")
    }
    return (
        <div>
            <form>
                <label for="Email">Email</label>
                <input placeholder='Enter Email'></input><br />
                <label for="Password">Password</label>
                <input placeholder='Enter Password'></input><br />
                <input type='submit' value={"Sign In"}></input>
            </form>
            <p>New Customer ?<button onClick={onSignUpButtonClick}>Sign Up</button></p>
        </div>
    )
}

export default SignInPage
