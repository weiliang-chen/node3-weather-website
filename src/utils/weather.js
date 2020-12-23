const request = require('request')

const forecast = (latitude, longitude , callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=75917d3f56d70022191a16377f25b4ce&query=' + encodeURIComponent(latitude) +',' +encodeURIComponent(longitude) +'&units=f'

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location',undefined)
        } else {
            callback(undefined, {
                temperature: body.current.temperature,
                weather: body.current.weather_descriptions[0],
                humidity: body.current.humidity
            })
        }
    })
}


module.exports = forecast