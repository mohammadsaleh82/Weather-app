


const GetLocation = () => {

    navigator.geolocation.getCurrentPosition(loc())

    const x1 = ''
    const y1 = ''

    const loc = (pos) => {
        y1 = pos.coords.latitude
        x1=pos.coords.longitude

    }


    return {
        y: y1,
        x: x1
    }
}

export default GetLocation;