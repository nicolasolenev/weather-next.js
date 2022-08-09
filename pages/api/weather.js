// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const API_KEY = '1ecee8957cc21a11ca80c92ee63c1841';

export const DOMAIN = {
  MAIN: 'https://openweathermap.org/',
  API: 'https://api.openweathermap.org/',
};

export const REQUEST = {
  WEATHER: 'weather',
  FORECAST: 'forecast',
};

const getUrlByCity = (type, city) =>
  `${DOMAIN.API}data/2.5/${type}?q=${city}&appid=${API_KEY}&units=metric`;

const getUrlByGeo = (type, lat, lon) =>
  `${DOMAIN.API}data/2.5/${type}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

const getUrlsByCity = (city) => ({
  weather: getUrlByCity(REQUEST.WEATHER, city),
  forecast: getUrlByCity(REQUEST.FORECAST, city),
});

const getUrlsByGeo = (lat, lon) => ({
  weather: getUrlByGeo(REQUEST.WEATHER, lat, lon),
  forecast: getUrlByGeo(REQUEST.FORECAST, lat, lon),
});

const getRequest = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const handler = async (req, res) => {
  const city = req.query.city;
  const lat = req.query.lat;
  const lon = req.query.lon;
  const url = city ? getUrlsByCity(city) : getUrlsByGeo(lat, lon);

  const request = async () => {
    const promise = await Promise.all([
      getRequest(url.weather),
      getRequest(url.forecast),
    ]);

    const data = {
      weather: promise[0],
      forecast: promise[1],
    };

    return res.status(200).json(data);
  };

  return request();
};

export default handler;
