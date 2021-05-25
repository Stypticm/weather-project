import { configureStore } from '@reduxjs/toolkit'
import getWeatherReducer from '../features/getWeather/getWeatherLocationSlice'

export default configureStore({
  reducer: {
      getLocation: getWeatherReducer
  },
})