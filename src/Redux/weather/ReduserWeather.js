import { Recive_Weather_ERROR, Recive_Weather_Request, Send_Weather_Request } from "./TypeWeather"

const init = {
    loading: false,
    data: {},
    error: ''
}


const ReducerWeather = (state = init, action) => {

    switch (action.type) {

        case Send_Weather_Request:
            return { ...state, loading: true }

        case Recive_Weather_Request:
            return { loading: false, data: action.payload, error: '' }

        case Recive_Weather_ERROR:
            return { loading: false, error: action.payload, data: {} }

        default: return state
    }
}

export default ReducerWeather;