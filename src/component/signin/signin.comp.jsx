import React from "react";
import FormInput from "../form/form-input.comp";
import './signin.style.scss'
import CustomButton from "../custom-button/custom-button";
import {signInWithGoogle} from "../../firebase/firebase.utils";

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    handleChange = event => {
      const {value ,name} = event.target;
      this.setState({[name] : value})
    }

    handleSubmit = event=>{
        event.preventDefault();
        this.setState({
            email:'',
            password:''
        })
    }

    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Signin with your email and password</span>
                <form onSubmit = {this.handleSubmit}>
                    <FormInput name="email" label="Email" type="email" 
                        value={this.state.email} handelChange={this.handleChange} required />
                    <FormInput name="password" label="Password" type="password" 
                        value={this.state.password} handelChange={this.handleChange} required />
                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In With GooGle
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}