const userReducer = ( state = "" , action ) => {
    switch (action.type) {
        case "USERNAME" :
            return action.payload;
        default:
            return state
    }
};

export default userReducer;