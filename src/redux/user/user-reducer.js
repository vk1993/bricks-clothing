const initial_State = {
    currentUser:null,
    loggedIn: null
}

const userReducer = (state = initial_State,action) =>{
    switch (action.type) {
      case "SET_CURRETN_USER":
        return {
          ...state,
          currentUser: action.payload
        };
      default:
        return state;
    }
}
export default userReducer;