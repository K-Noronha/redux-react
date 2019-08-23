export const updateSection = (section) => {
    return {
        type: 'UPDATESECTION',
        payload: section
    }
}

export const userName = (name) => {
    return {
        type: 'USERNAME',
        payload: name
    }
}