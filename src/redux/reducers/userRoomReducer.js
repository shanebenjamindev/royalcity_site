// Get list room by Id        
import * as actions from '../types/constants'

const initialState = {
    loading: false,
    data: null,
    error: null
}

const userRoomReducer = (state = initialState, action) => {
    switch (action.type) {
        // City detail
        case actions.USER_ROOM_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.USER_ROOM_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }

        case actions.USER_ROOM_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }
        default:
            return { ...state }
    }
}

export default userRoomReducer