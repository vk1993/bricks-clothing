import {auth, createUserProfileDocument} from "../firebase/firebase.utils";
import {RematchDispatch as dispatch} from "@rematch/core";


export const signin = {
    state: {
        currentUser:null
    },
    reducers: {
        updateUser(state, user) {
            if(!user) return state;

            return {
                ...state,
                currentUser:user
            };
        },

    },
    effects: {
        async onAuthChanged() {
            auth.onAuthStateChanged( async userAuth =>{
                if(userAuth){
                    const userRef = await createUserProfileDocument(userAuth);
                    userRef.onSnapshot( snapShot => {
                        this.setState({
                            currentUser :{
                                id:snapShot.id,
                                ...snapShot.data()
                            }
                        });
                    });
                }
                dispatch.signin.updateUser(userAuth);
            })
        }
    }
};
