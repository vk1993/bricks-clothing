import React from 'react';
import FormInput from "../form/form-input.comp";
import CustomButton from "../custom-button/custom-button";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";
import './signup.styles.scss'

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayName : '',
            email: '',
            password: '',
            confrimPassword:''
        }
    }
    handleSubmit = async event =>{
        event.preventDefault();
        const {displayName,email,password,confrimPassword} = this.state;

        if(password !== confrimPassword){
            alert("password don't match");
            return ;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName});
            this.setState({
                displayName : '',
                email: '',
                password: '',
                confrimPassword:''
            })
        }catch (e) {
            console.log(e);
        }
    }
    handleChange = event =>{
        const {name,value} = event.target;
        this.setState({[name]:value})
    }

    render() {
        return(
            <div className="sign-up">
                <h2 className="title">I dont have account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="displayName" label="Display Name" type="text"
                               value={this.state.displayName} handelChange={this.handleChange} required />
                    <FormInput name="email" label="Email" type="email"
                               value={this.state.email} handelChange={this.handleChange} required />
                    <FormInput name="password" label="Password" type="password"
                               value={this.state.password} handelChange={this.handleChange} required />
                    <FormInput name="confrimPassword" label="Confrim Password" type="password"
                               value={this.state.confrimPassword} handelChange={this.handleChange} required />
                    <div className='buttons'>
                        <CustomButton type="submit">Sign Up</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;