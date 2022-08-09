import { format } from 'date-fns';

import { DOMAIN } from '../pages/api/weather';

export const getTime = (ms = 0) => format(new Date(ms * 1000), 'HH:mm');
export const getDay = (ms = 0) => format(new Date(ms * 1000), 'd LLL');

export const getIconUrl = ({ iconId, isForecast }) => {
  if (isForecast) {
    return `${DOMAIN.MAIN}img/wn/${iconId}.png`;
  }

  return `${DOMAIN.MAIN}/img/wn/${iconId}@4x.png`;
};

export const getWeatherUrl = ({ city, lat = 50.2797, lon = 57.2072 }) => {
  if (city) {
    return `http://nicolasolenev.ml/api/weather?city=${city}`;
  }

  return `http://nicolasolenev.ml/api/weather?lat=${lat}&lon=${lon}`;
};
