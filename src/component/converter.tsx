import { Day } from "./Interface";

export const location = (loc: string): string => {
  const b = loc.split("");
  let place = "";
  b.forEach((element, index) => {
    if (element === "/") {
      place = loc.slice(index + 1);
    }
  });
  return place;
};

export const converter = (temp: number): string => {
  return (temp - 273).toFixed(0);
};

export const date = (dt: number): string => {
  return new Date(dt * 1000).toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
};

export const time = (dt: number): string => {
  return new Date(dt * 1000).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
};

export const day = (dt: number): string => {
  return new Date(dt * 1000).toLocaleString("en-US", { weekday: "short" });
};

export const dayNum = (dt: number): string => {
  return new Date(dt * 1000).toLocaleString("en-US", { day: "numeric" });
};

export const windSpeed = (wind_speed: number): string => {
  return wind_speed.toFixed(1);
};

export const dailyfilter = (daily: Day[]): Day[] => {
  let dailyneed: Day[];
  dailyneed = [];
  daily.forEach((element) => {
    if (dailyneed.length < 5) {
      dailyneed.push(element);
    }
  });
  return dailyneed;
};

export const getCoordinates = (option = {}) => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, option);
  });
};
