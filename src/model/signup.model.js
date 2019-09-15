import {auth, createUserProfileDocument} from "../firebase/firebase.utils";


export const getInit = ()=>{
    return ({
        displayName : '',
        email: '',
        password: '',
        confrimPassword:''
    })
}


export default {
    intialState :{
        displayName : '',
        email: '',
        password: '',
        confrimPassword:''
    } ,
    reducers :null ,
    effect : null
}

