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

export const coolMatter = () => {
    return {
        type: 'COOLMATTER'
    }
}

export const heatMatter = () => {
    return {
        type: 'HEATMATTER'
    }
}