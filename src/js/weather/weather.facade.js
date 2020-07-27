export class WeatherDataFacade {
  constructor(weatherState) {
    this.weatherState = weatherState;
    this.dayNames = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturady',
    ];
  }

  updateWeatherState(weatherData) {
    if (!!weatherData) {
      this.weatherState = weatherData;
    }
  }

  getTodayForecast() {
    return {
      temp: Math.round(this.weatherState.todayForecast.main.temp),
      feelsLikeTemp: Math.round(
        this.weatherState.todayForecast.main.feels_like,
      ),
      wind: this.weatherState.todayForecast.wind.speed,
      humidity: this.weatherState.todayForecast.main.humidity,
      icon: this.weatherState.todayForecast.weather[0].icon,
    };
  }

  getNextThreeDaysForecast() {
    return this.weatherState.nextThreeDaysForecast.map((data) => {
      return {
        dayName: this.dayNames[new Date(data.dt_txt).getDay()],
        temp: Math.round(data.main.temp),
        icon: data.weather[0].icon,
      };
    });
  }

  getCoordinates() {
    return this.weatherState.coord;
  }

  getCityData() {
    const splitedDateTime = this.weatherState.todayForecast.dt_txt.split(' ');
    return {
      city: this.weatherState.city,
      countrySymbol: this.weatherState.countrySymbol,
      date: `${this.dayNames[new Date(splitedDateTime[0]).getDay()]} ${new Date(
        splitedDateTime[0],
      ).toString()}`,
      time: splitedDateTime[1],
    };
  }
}
