import * as actions from '../types/constants'
import api from '../../ApiUtils'
/**
 * Room Reducer 
 */
// Home Get List Room:
export const actHomeListRoom = () => {
    return (dispatch) => {
        dispatch(actHomeListRoomRequest);
        api
            .get(`/phong-thue/phan-trang-tim-kiem?pageIndex=1&pageSize=16`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actHomeListRoomSuccess(result.data.content));
                }
            })
            .catch((error) => {
                const { content } = error.response.data
                dispatch(actHomeListRoomFail(content))
            });
    };
}

const actHomeListRoomRequest = () => ({ type: actions.HOMELIST_ROOM_REQUEST })
const actHomeListRoomSuccess = (data) => ({ type: actions.HOMELIST_ROOM_SUCCESS, payload: data })
const actHomeListRoomFail = (error) => ({ type: actions.HOMELIST_ROOM_FAIL, payload: error })

// Post Room 
export const actAddRoom = (roomData) => {
    return (dispatch) => {
        dispatch(actAddRoomRequest)
        api.post(`/phong-thue/`, roomData)
            .then((result) => {
                // console.log(result.data.content);
                dispatch(actAddRoomSuccess(result.data.content))
                // alert("Đã thêm vào hồ sơ")
            })
            .catch((error) => {
                const { content } = error.response.data
                alert(content)
            })
    }
}

const actAddRoomRequest = () => ({ type: actions.ADD_ROOM_REQUEST })
const actAddRoomSuccess = (data) => ({ type: actions.ADD_ROOM_SUCCESS, payload: data })
const actAddRoomFail = (error) => ({ type: actions.ADD_ROOM_SUCCESS, payload: error })

// Delete Room
export const actDeleteRoom = (id) => {
    return (dispatch) => {
        dispatch(actDeleteRoomRequest)
        api.delete(`/phong-thue/${id}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    alert(result.data.message)
                }
            })
            .catch((error) => {
                const { content } = error.response.data
                alert(content)
            })
    }
}

const actDeleteRoomRequest = () => ({ type: actions.DELETE_ROOM_USER_REQUEST })
const actDeleteRoomSuccess = (data) => ({ type: actions.DELETE_ROOM_USER_SUCCESS, payload: data })
const actDeleteRoomFail = (error) => ({ type: actions.DELETE_ROOM_USER_FAIL, payload: error })


export const actListRoom = () => {
    return (dispatch) => {
        dispatch(actListRoomRequest)
        api.get(`/phong-thue/`)
            .then((result) => {
                console.log(result.data.content);
                if (result.data.statusCode === 200) {
                    dispatch(actListRoomSuccess(result.data.content))
                }
            })
            .catch((error) => {
                const { content } = error.response.data
                dispatch(actListRoomFail(content))
            })
    }
}
const actListRoomRequest = () => ({ type: actions.HOMELIST_ROOM_REQUEST })
const actListRoomSuccess = (data) => ({ type: actions.HOMELIST_ROOM_SUCCESS, payload: data })
const actListRoomFail = (error) => ({ type: actions.HOMELIST_ROOM_FAIL, payload: error })
