import { config } from '../config/config';

export class WeatherService {
  getWeatherDataByCityName(city) {
    return this.getWeatherData(config.url.weather.weatherCity(city));
  }

  getWeatherDataByCityCoordinates(coordinates) {
    return this.getWeatherData(
      config.url.weather.weatherCoordinates(coordinates.lat, coordinates.lon),
    );
  }

  async getWeatherData(url) {
    const wetherResponse = await fetch(url);
    if (wetherResponse.ok) {
      const weatherData = await wetherResponse.json();

      const days = weatherData.list.filter((_, index) => index % 8 === 0);
      console.log(days);
      return {
        city: weatherData.city.name,
        countrySymbol: weatherData.city.country,
        coord: weatherData.city.coord,
        todayForecast: days[0],
        nextThreeDaysForecast: [days[1], days[2], days[3]],
      };
    } else {
      return null;
    }
  }
}
