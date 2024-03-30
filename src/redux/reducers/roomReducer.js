import * as actions from '../types/constants'

const initialState = {
    loading: false,
    data: null,
    error: null
}

const roomReducer = (state = initialState, action) => {
    switch (action.type) {
        // get home list room         
        case actions.HOMELIST_ROOM_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.HOMELIST_ROOM_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }

        case actions.HOMELIST_ROOM_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        // Add room
        case actions.ADD_ROOM_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.ADD_ROOM_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }

        case actions.ADD_ROOM_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        // delete room user
        case actions.DELETE_ROOM_USER_REQUEST:
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }

        case actions.DELETE_ROOM_USER_SUCCESS:
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }

        case actions.DELETE_ROOM_USER_FAIL:
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }

        default:
            return { ...state }
    }
}

export default roomReducer