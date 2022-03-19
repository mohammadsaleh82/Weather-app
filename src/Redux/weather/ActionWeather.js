import axios from "axios"
import { Recive_Weather_ERROR, Recive_Weather_Request, Send_Weather_Request } from "./TypeWeather"

const SendRequest = () => {

    return {
        type: Send_Weather_Request
    }
}

const ReciveRequset = (data) => {

    return {
        type: Recive_Weather_Request,
        payload: data
    }
}

const ReciveError = (erroe) => {
    return {
        type: Recive_Weather_ERROR,
        payload: erroe
    }
}


const GetWeather = (query) => {

    return dispatch => {
        dispatch(SendRequest())
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=6727acf359eeb5db0f4d0ad83b00ca91`).then(res => {
            dispatch(ReciveRequset(res.data))
        }).catch(err => {
            dispatch(ReciveError(err.message))
        })
    }
}

export default GetWeather;