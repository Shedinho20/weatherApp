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
}

export interface NavbarWekly {
  keyClicked: (dt: number) => void;
  converter: (temp: number) => string;

  info: number;
  days: {
    dt: number;
    temp: Temp;
    weather: [Icon];
  }[];
}

export interface Homeprops {
  current: { feels_like: number; temp: number; dt: number; wind_speed: number; sunset: number; sunrise: number };
  currentWeather: { icon: string; main: string };
  Timezone: string;
  location: (loc: string) => string;
  converter: (temp: number) => string;
  time: (dt: number) => string;
  date: (dt: number) => string;
  windSpeed: (wind_speed: number) => string;
}

export interface Dayprops {
  day: {
    dt: number;
    temp: Temp;
    weather: [Icon];
  };
  info: number;
  keyClicked: (dt: number) => void;
  converter: (temp: number) => string;
}

export interface Hourprop {
  hour: {
    dt: number;
    feels_like: number;
    weather: [Icon];
  };
}

export interface NavbarProps {
  location: (loc: string) => string;
  timezone: string;
}

export interface State {
  days: object[];
  Timezone: string;
  Hours: object[];
  current: object[];
  currentWeather: object[];
}
export interface AppProps {}

interface Icon {
  icon: string;
}
interface Temp {
  max: number;
}
