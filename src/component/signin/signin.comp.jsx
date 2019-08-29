import React from "react";
import FormInput from "../form/form-input.comp";
import './signin.style.scss'
import CustomButton from "../custom-button/custom-button";
import {auth,signInWithGoogle} from "../../firebase/firebase.utils";

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
    };

    handleSubmit = async event=>{
        event.preventDefault();

        const { email,password } = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                email:'',
                password:''
            })
        }catch (e) {
         console.log(e);
        }
    };

    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>SignIn with your email and password</span>
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