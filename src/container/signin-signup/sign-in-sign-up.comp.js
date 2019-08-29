import React from 'react'

import './sign-in-sign-up.style.scss'
import SignIn from '../../component/signin/signin.comp';
import SignUp from "../../component/signup/signup.comp";

const SignInAndSignUp = () =>(
    <div className='sign-in-and-sign-up'>
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>
    
)

export default SignInAndSignUp;