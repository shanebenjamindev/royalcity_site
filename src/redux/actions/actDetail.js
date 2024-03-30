import * as actions from '../types/constants'
import api from '../../ApiUtils'

export const actRoomDetail = (id) => {
    return (dispatch) => {
        dispatch(actRoomDetailRequest)
        api.get(`phong-thue/${id}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actRoomDetailSucess(result.data.content))
                }
            })
            .catch((error) => {
                dispatch(actRoomDetailFail(error.response.data))
            })
    }
}


export const actCityDetail = (id) => {
    return (dispatch) => {
        dispatch(actCityDetailRequest)
        api.get(`/phong-thue/lay-phong-theo-vi-tri?maViTri=${id}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actCityDetailSucess(result.data.content))
                }
            })
            .catch((error) => {
                const { content } = error.response.data
                dispatch(actCityDetailFail(content))
            })
    }
}


export const actGetRoomByUser = (id) => {
    return (dispatch) => {
        dispatch(actGetListRoomByUserRequest)
        api.get(`/dat-phong/lay-theo-nguoi-dung/${id}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actGetListRoomByUserSuccess(result.data.content))
                }
            })
            .catch((error) => {
                const { content } = error.response.data
                dispatch(actGetListRoomByUserFail(content))
            })
    }
}

const actGetListRoomByUserRequest = () => ({ type: actions.USER_ROOM_REQUEST })
const actGetListRoomByUserSuccess = (data) => ({ type: actions.USER_ROOM_SUCCESS, payload: data })
const actGetListRoomByUserFail = (error) => ({ type: actions.USER_ROOM_FAIL, payload: error })

const actRoomDetailRequest = () => ({ type: actions.ROOM_DETAIL_REQUEST })
const actRoomDetailSucess = (data) => ({ type: actions.ROOM_DETAIL_SUCCESS, payload: data })
const actRoomDetailFail = (error) => ({ type: actions.ROOM_DETAIL_FAIL, payload: error })

const actCityDetailRequest = () => ({ type: actions.CITY_DETAIL_REQUEST })
const actCityDetailSucess = (data) => ({ type: actions.CITY_DETAIL_SUCCESS, payload: data })
const actCityDetailFail = (error) => ({ type: actions.CITY_DETAIL_FAIL, payload: error })
