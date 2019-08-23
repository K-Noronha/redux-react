const sectionReducer = ( state = "", action ) => {
    switch (action.type) {
        case "UPDATESECTION" :
            return action.payload;
        default:
            return state
    }
};

export default sectionReducer;