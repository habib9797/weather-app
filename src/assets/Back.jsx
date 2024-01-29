import Cloud from './icons/Cloud'
import CloudDrizzle from './icons/CloudDrizzle'
import CloudRain from './icons/CloudRain'
import Sun from './icons/Sun'
import CloudSnow from './icons/CloudSnow'
import Thunderstorm from './icons/CloudLighting'
import Other from './icons/Other'
import Rectangle from './Additionally'

const icons = {
	Thunderstorm,
	Drizzle: CloudDrizzle,
	Rain: CloudRain,
	Snow: CloudSnow,
	Clear: Sun,
	Clouds: Cloud,
}

function Back({ data }) {
	const icon = data.weather[0].main
	const Icon = icons[icon] || Other

	return (
		<main>
			<h2>{data.name}</h2>
			<h3>
				{data.weather.map(item => (
					<div key={item.description}>{item.description}</div>
				))}
			</h3>
			<div className='weather-icon'>
				<Icon />
			</div>
			<p className='temp'>{data.main.temp} °C</p>
			<div className='temp-minimax'>
				<p>Макс: {data.main.temp_max} °C</p>
				<p>Мин: {data.main.temp_min} °C</p>
			</div>
			<Rectangle data={data} />
		</main>
	)
}

export default Back
