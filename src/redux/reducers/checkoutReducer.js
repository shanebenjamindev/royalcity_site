import * as actions from '../types/constants'

const initialState = {
    loading: false,
    data: null,
    error: null
}

const checkoutReducer = (state = initialState, action) => {
    switch (action.type) {
        // post cmt
        case actions.CHECKOUT_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.CHECKOUT_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }

        case actions.CHECKOUT_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }
        
        default:
            return { ...state }
    }
}

export default checkoutReducer