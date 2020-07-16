export interface Forecast {
  list: WeatherForecast[];
  city: City;
}

export interface City {
  name: string;
}

export interface WeatherForecast {
  dt: number;
  dt_txt: string;
  weather: Weather[];
  main: Main;
}

interface Weather {
  description: string;
  id: number;
}

interface Main {
  humidity: number;
  temp: number;
  temp_max: number;
  temp_min: number;
  feels_like: number;
}
