export interface WeeklyProps {
  Hours: {
    dt: number;
    feels_like: number;
    weather: [Icon];
  }[];
  converter: (temp: number) => string;
  days: {
    dt: number;
    temp: Temp;
    weather: [Icon];
  }[];
  windSpeed: (wind_speed: number) => string;
}

export interface NavbarWekly {
  keyClicked: (dt: number) => void;
  info: number;
  days: Day[];
}

export interface Homeprops {
  current: Current;
  Timezone: string;
  location: (loc: string) => string;
  converter: (temp: number) => string;
  time: (dt: number) => string;
  date: (dt: number) => string;
  windSpeed: (wind_speed: number) => string;
  fetchWeather: any;
  weather: any;
}
interface CurrentWeather {
  icon: string;
  main: string;
}
export interface AppState {
  fetchWeather: any;
  current: Current;
  isLoading: boolean;
}
export interface Current {
  feels_like: number;
  temp: number;
  dt: number;
  wind_speed: number;
  sunset: number;
  sunrise: number;
  weather: Main[];
}
export interface Dayprops {
  day: Day;
  info: number;
  keyClicked: (dt: number) => void;
}

export interface Day {
  dt: number;
  temp: Temp;
  weather: [Icon];
}
interface Main {
  main: string;
  icon: string;
}

export interface Hourprop {
  hour: Hour;
}

interface Hour {
  dt: number;
  feels_like: number;
  weather: [Icon];
}

export interface NavbarProps {
  timezone: string;
}

export interface State {
  days: Day[];
  Timezone: string;
  Hours: Hour[];
  current: Current[];
  weather: any;
  isLoading: boolean;
}

interface Icon {
  icon: string;
}

interface Temp {
  max: number;
}

export interface Payload {
  days: Day[];
  Timezone: string;
  current: Current;
  weather: any;
  Hours: Hour;
  isloading: boolean;
}
