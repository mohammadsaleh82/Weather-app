import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import ReducerWeather from "./weather/ReduserWeather";

const store=createStore(ReducerWeather,applyMiddleware(thunk))


export default store;