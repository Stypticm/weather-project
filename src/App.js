import { useState, useRef, useEffect } from 'react';
import WeatherCard from './components/WeatherCard';
import { API_KEY } from './hide/config';
import { useSelector, useDispatch } from 'react-redux';

// Material UI
import { Container, Box, Button, Typography, Divider, TextField } from '@material-ui/core';

// Redux
import { getCurrentLocation } from './features/getWeather/getWeatherLocationSlice';

function App() {
	//current/condition (text, icon)

	const stateLocation = useSelector((state) => state.getLocation.data);
	const stateLoading = useSelector((state) => state.getLocation.isLoading);

	const dispatch = useDispatch();

	// const [ loading, setLoading ] = useState(stateLoading);
	const [ city, setCity ] = useState('');
	const [ country, setCountry ] = useState('');
	const [ condition, setCondition ] = useState('');
	const [ conditionIcon, setConditionIcon ] = useState('');

	const valueRef = useRef('');

	const getWeather = () => {
		let curCity = valueRef.current.value;
		dispatch(getCurrentLocation(curCity, API_KEY));
	};


	useEffect(() => {
		if (stateLocation === null) {
			setCity('');
			setCountry('');
			setCondition('');
			setConditionIcon('');
		} else {
			setCity(stateLocation.location.name);
			setCountry(stateLocation.location.country);
			setCondition(stateLocation.current.condition.text);
			setConditionIcon(stateLocation.current.condition.icon);
		}
	}, [stateLocation, stateLoading]);

	return (
		<Container>
			<Box display="flex" justifyContent="center">
				<Typography variant="h3" gutterBottom>
					Weather Project
					<Divider />
				</Typography>
			</Box>
			<Box display="flex" justifyContent="space-around">
				<Box display="flex">
					<Box pr="2rem">
						<TextField type="text" label="Enter your city" inputRef={valueRef} />
					</Box>
					<Box>
						<Button size="large" variant="outlined" color="default" onClick={getWeather}>
							Get Weather
						</Button>
					</Box>
				</Box>
				<Box>
					{
						stateLocation != null ? <WeatherCard country={country} city={city} condition={condition} conditionIcon={conditionIcon} /> : ''
					}
				</Box>
			</Box>
		</Container>
	);
}

export default App;
