import {auth, createUserProfileDocument} from "../firebase/firebase.utils";


export default{
    state: {
        currentUser:null
    },
    reducers: {
        updateUser(state, user) {
            if(!user) {
                console.log(state)
                return state;
            }
            console.log(user);
            console.log({
                ...state,
                currentUser:user
            })
            return {
                ...state,
                currentUser:user
            };
        },
    },
    effects: dispatch =>({
        async onAuthChanged() {
            auth.onAuthStateChanged( async userAuth =>{
                if(userAuth){
                    const userRef = await createUserProfileDocument(userAuth);
                    userRef.onSnapshot( snapShot => {
                        this.updateUser({
                               user:{
                                   id:snapShot.id,
                                   ...snapShot.data()
                               }
                        });
                    });
                }
                this.updateUser(userAuth);
                console.log(userAuth)
            })
        },
        async onLogout() {
            await auth.signOut();
            console.log("signout")
            this.updateUser({
                ...null
            })
        }
    })
};


