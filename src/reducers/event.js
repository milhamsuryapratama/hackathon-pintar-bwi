const event = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_EVENT': {
            return action.payload
        }
        case 'EDIT_EVENT': {
            return action.payload
        }
        case 'FETCH_QR': {
            return action.payload
        }
        default: {
            return state
        }
    }
}

export default event