const wisata = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_WISATA': {
            return action.payload
        }
        default: {
            return state
        }
    }
}

export default wisata