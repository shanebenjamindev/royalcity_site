import { combineReducers } from "redux"
import cityReducer from "../redux/reducers/cityReducer"
import authReducer from "../redux/reducers/authReducer"
import commentReducer from "../redux/reducers/commentReducer"
import checkoutReducer from "../redux/reducers/checkoutReducer"
import userReducer from "../redux/reducers/userReducer"
import userRoomReducer from "../redux/reducers/userRoomReducer"
import roomReducer from "../redux/reducers/roomReducer"
import roomDetailReducer from "../redux/reducers/roomDetailReducer"
import cityDetailReducer from "../redux/reducers/cityDetailReducer"
const rootReducer = combineReducers({
    cityReducer,
    authReducer,
    commentReducer,
    checkoutReducer,
    roomReducer,
    detailReducer: roomDetailReducer,
    userReducer,
    cityDetailReducer,
    userRoomReducer
})

export default rootReducer