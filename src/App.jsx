import React, { useEffect, useState } from 'react'
import fetchWeather from './fetchWeather'
import Back from './assets/Back'

const TIMEOUT_SEC = 30000

function App() {
	const [lat, setLat] = useState(0)
	const [lon, setLon] = useState(0)
	const [data, setData] = useState(null)

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(function (position) {
			setLat(position.coords.latitude)
			setLon(position.coords.longitude)
		})
	}, [])

	useEffect(() => {
		let interval = null

		if (lat && lon) {
			const fetchData = () => {
				fetchWeather(lat, lon).then(result => {
					setData(result)
				})
			}

			fetchData()

			interval = setInterval(fetchData, TIMEOUT_SEC)
		}

		return () => {
			clearInterval(interval)
		}
	}, [lat, lon])

	if (!data) {
		return null
	}

	return <Back data={data} />
}
export default App
