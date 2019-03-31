const initState = {
    authLogin: false,
    authLogout: false
}

const auth = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUKSES': {
            return {
                ...state,
                authLogin: true,
                authLogout: false
            }
        }
        case 'LOGOUT_SUKSES': {
            return {
                ...state,
                authLogin: false,
                authLogout: true
            }
        }
        default: {
            return state
        }
    }
}

export default auth