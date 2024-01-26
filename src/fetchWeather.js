const baseURL = import.meta.env.VITE_APP_API_URL
const appID = import.meta.env.VITE_APP_API_KEY

export default function (lat, lon) {
	const URL = `${baseURL}/weather/?lat=${lat}&lon=${lon}&lang=ru&units=metric&appid=${appID}`
	return fetch(URL).then(res => res.json())
}
