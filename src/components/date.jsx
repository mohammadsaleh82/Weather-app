import jMoment from "moment-jalaali";
import { Fragment, useEffect, useState } from "react";


const dayofweak = [
    'یکشنبه',
    'دوشنبه',
    'سه شنبه',
    'چهارشنبه',
    'پنجشنبه',
    'جمعه',
    'شنبه'
]

const monthofyear = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند'
]

const Persiandate = () => {

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')


    useEffect(() => {
        const m = jMoment()

        const finaldate = `${dayofweak[m.day()]} ${m.jDate()} ${monthofyear[m.jMonth()]} ${m.jYear()}`

        setDate(finaldate)
        setTime(m.format('ساعت HH:MM'))
        
    }, [])

    return (
        <Fragment>
            <span>{date}</span>
            <span>{time}</span>
        </Fragment>
    )
}

export default Persiandate;