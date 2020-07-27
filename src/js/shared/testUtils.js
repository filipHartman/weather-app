export const exampleState = {
  city: 'Dominowo',
  countrySymbol: 'PL',
  coord: {
    lat: 52.2916,
    lon: 17.3575,
  },
  nextThreeDaysForecast: [
    {
      dt: 1595030400,
      main: {
        temp: 14.07,
        feels_like: 13.89,
        temp_min: 14.07,
        temp_max: 14.07,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 990,
        humidity: 90,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.34,
        deg: 217,
      },
      visibility: 10000,
      pop: 0.56,
      rain: {
        '3h': 0.2,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2020-07-18 00:00:00',
    },
    {
      dt: 1595116800,
      main: {
        temp: 16.11,
        feels_like: 17.5,
        temp_min: 16.11,
        temp_max: 16.11,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 989,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.39,
        deg: 262,
      },
      visibility: 10000,
      pop: 0.62,
      rain: {
        '3h': 0.67,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2020-07-19 00:00:00',
    },
    {
      dt: 1595203200,
      main: {
        temp: 17.08,
        feels_like: 18.43,
        temp_min: 17.08,
        temp_max: 17.08,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 987,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 87,
      },
      wind: {
        speed: 0.33,
        deg: 224,
      },
      visibility: 10000,
      pop: 0.65,
      sys: {
        pod: 'n',
      },
      dt_txt: '2020-07-20 00:00:00',
    },
  ],

  todayForecast: {
    dt: 1594944000,
    main: {
      temp: 13.4,
      feels_like: 12.42,
      temp_min: 12.48,
      temp_max: 13.4,
      pressure: 1015,
      sea_level: 1014,
      grnd_level: 989,
      humidity: 94,
      temp_kf: 0.92,
    },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04n',
      },
    ],
    clouds: {
      all: 81,
    },
    wind: {
      speed: 2.48,
      deg: 267,
    },
    visibility: 10000,
    pop: 0.34,
    sys: {
      pod: 'n',
    },
    dt_txt: '2020-07-17 00:00:00',
  },
};
