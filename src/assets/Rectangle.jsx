import Humidity from './icons/Humidity'
import CloudRain from './icons/CouldRain'
import Wind from './icons/Wind'

function Rectangle(props) {
	return (
		<div className='rectangle'>
			<p title='Ощущается как'>
				<CloudRain /> {props.data.main.feels_like}
			</p>
			<p title='Влажность'>
				<Humidity /> {props.data.main.humidity}
			</p>
			<p title='Скорость ветра'>
				<Wind /> {props.data.wind.speed}
			</p>
		</div>
	)
}

export default Rectangle
