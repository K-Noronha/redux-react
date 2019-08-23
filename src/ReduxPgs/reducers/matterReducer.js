const matterReducer = ( state = "" , action ) => {
    switch (action.type) {
        case "SOLID" :
            return "solid";
        default:
            return state
    }
};

export default matterReducer;