import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  selectedCity: 'Aktobe',
  favoriteCities: [],
  weather: {
    isFetching: false,
    isReady: false,
    isError: false,
    errorMessage: null,
    data: {},
  },
};

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeatherData',
  async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }
);

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favoriteCities.push(action.payload);
    },

    deleteFavorite: (state, action) => {
      state.favoriteCities = [...state.favoriteCities].filter(
        (city) => city !== action.payload
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.weather.isFetching = true;
      state.weather.isReady = false;
      state.weather.isError = false;
      state.weather.errorMessage = null;
    });

    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      const data = action.payload;
      const isValid = Number(data.weather.cod) === 200;

      state.weather.isFetching = false;

      if (isValid) {
        state.selectedCity = data.weather.name;
        state.weather.data = data;
        state.weather.isReady = true;
      } else {
        state.weather.isError = true;
        state.weather.errorMessage = data.message;
      }
    });

    builder.addCase(fetchWeather.rejected, (state) => {
      state.weather.isFetching = false;
      state.weather.isError = true;
      state.weather.errorMessage = 'Oops, something went wrong ;(';
    });
  },
});

export const { addFavorite, deleteFavorite, setWeatherData } =
  weatherSlice.actions;

export default weatherSlice.reducer;
