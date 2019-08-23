const matterReducer = (state = 1, action) => {
    switch (action.type) {
        case "COOLMATTER":
            return state + 1;
        case "HEATMATTER":
            return state - 1;
        default:
            return state
    }
};

export default matterReducer;