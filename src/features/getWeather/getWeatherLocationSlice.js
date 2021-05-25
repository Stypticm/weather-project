import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
	error: '',
	data: null
};

export const getWeatherLocationSlice = createSlice({
	name: 'getLocation',
	initialState,

	reducers: {
		setLoading: (state, action) => {
			state.isLoading = action.payload;
		},
		setError: (state, action) => {
			state.error = action.payload;
		},
		setData: (state, action) => {
			state.data = action.payload;
		}
	}
});

export const { setLoading, setError, setData } = getWeatherLocationSlice.actions;

export const getCurrentLocation = (curCity, API_KEY, skipLoader = false) => (dispatch) => {
	if (!skipLoader) {
		dispatch(setLoading(true));
	}

	const general_path = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${curCity}&aqi=no`;

	fetch(general_path)
		.then((response) => response.json())
		.then((data) => {
			dispatch(setData(data));
			if (!skipLoader) {
				dispatch(setLoading(false));
			}
		})
		.catch((err) => {
			dispatch(setError(err.message));
		});
};

export default getWeatherLocationSlice.reducer;
