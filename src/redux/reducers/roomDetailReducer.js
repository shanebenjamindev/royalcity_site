// Get list room by Id        
import * as actions from '../types/constants'

const initialState = {
    loading: false,
    data: null,
    error: null
}

const roomDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        // Get room detail by Id
        case actions.ROOM_DETAIL_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.ROOM_DETAIL_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }

        case actions.ROOM_DETAIL_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        default:
            return { ...state }
    }
}

export default roomDetailReducer