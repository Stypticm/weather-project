import React from 'react';

// Material UI
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

export default function WeatherCard({ country, city, condition, conditionIcon }) {
	let icon = 'http:' + conditionIcon;

	return (
		<Card style={{padding: '2rem'}}>
			<Avatar alt="weatherIcon" src={icon} />
			<Typography variant="h6" gutterBottom>
				Country: {country}
			</Typography>
			<Typography variant="subtitle1" gutterBottom>
				City: {city}
			</Typography>
			<Typography variant="subtitle1" gutterBottom>
				Weather is {condition}
			</Typography>
			<Paper elevation={0} />
		</Card>
	);
}
