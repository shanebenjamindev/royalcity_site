// Get list room by Id        
import * as actions from '../types/constants'

const initialState = {
    loading: false,
    data: null,
    error: null
}

const cityDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        // City detail
        case actions.CITY_DETAIL_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.CITY_DETAIL_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }

        case actions.CITY_DETAIL_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }
        default:
            return { ...state }
    }
}

export default cityDetailReducer