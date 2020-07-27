import { apiConfig } from './apiKeys';

const defaultWeatherUrl = (units = 'metric', lang = 'en') =>
  `https://api.openweathermap.org/data/2.5/forecast?appid=${apiConfig.weather}&units=${units}&lang=${lang}`;

export const config = {
  url: {
    weather: {
      weatherCity: (cityName, units, lang) =>
        `${defaultWeatherUrl(units, lang)}&q=${cityName}`,
      weatherCoordinates: (lat, lon, units, lang) =>
        `${defaultWeatherUrl(units, lang)}&lat=${lat}&lon=${lon}`,
    },
    icon(iconSymbol) {
      return `http://openweathermap.org/img/w/${iconSymbol}.png`;
    },
  },
  componentId: {
    search: 'search',
    background: 'background',
    weather: 'weather',
  },
};
