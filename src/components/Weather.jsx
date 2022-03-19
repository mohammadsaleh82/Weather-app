import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetLocation from '../Core/GetLocation';
import GetWeather from '../Redux/weather/ActionWeather';
import Date from './date';

const Weather = () => {

    const [query, setQuery] = useState('')

    const [bg, setBg] = useState('normal')

    const { loading, data, error } = useSelector(state => state)

    const dispatch = useDispatch()

    const handleSendQuery = () => {

        dispatch(GetWeather(query))
       
    }


    useEffect(() => {
        if (!data.main) {
            return
        }


        let temp = Math.round(data.main.temp - 273.15)

        if (temp < 12) {
            setBg('cold')
        }
        else if (temp < 20) {
            setBg('normal')
        }
        else {
            setBg('warm')
        }

        

    }, [data])


    return (
        <div className={`weather-app bg-${bg} d-flex`} >
            <div className="main">
                <div className="search-box  text-center">
                    <input type="text" placeholder="نام مکان" value={query} onChange={(e) => setQuery(e.target.value)} />
                    <button onClick={handleSendQuery} className='btn btn-search m-2 btn-outline-success'>جستجو</button>
                </div>

                <div className="date">
                    <Date />
                </div>

                <div className="temperature text-center">
                    {loading ? (<><div class="spin"></div></>) : data.main ? (
                        <>
                            <h1>{`${Math.round(data.main.temp - 273.15)} C`}</h1>
                            <h2>{data.weather[0].main}</h2>
                        </>
                    ) : error ? (<>
                        <h1>خطایی رخ داد</h1>
                    </>) : (
                        <h3>
                            لطفا نام شهر را سرچ کنید
                        </h3>
                    )}
                </div>
            </div>
        </div >
    )
}

export default Weather;
