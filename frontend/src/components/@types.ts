type Coord = {
  lat: number;
  lon: number;
};

type Main = {
  temp: number;
};

type WeatherInfo = {
  description: string;
  id: number;
};

type Temp = {
  min: number;
  max: number;
};

type ForecastDaily = {
  dt: number;
  temp: Temp;
  weather: WeatherInfo[];
};

export type Weather = {
  name: string;
  coord: Coord;
  main: Main;
  weather: WeatherInfo[];
};

export type Forecast = {
  daily: ForecastDaily[];
};
