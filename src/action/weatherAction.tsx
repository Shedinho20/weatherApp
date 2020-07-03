import { FETCH_WEATHER, FETCHWEATHER } from "../action/constant";
import { getCoordinates, dailyfilter } from "../component/converter";
import { Dispatch } from "redux";

export const fetchWeather = () => {
  return async function (dispatch: Dispatch<FETCHWEATHER>) {
    try {
      let position: any;
      position = await getCoordinates();
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=c4bf502f01ad796b2ae93a93063fccb2`;
      const res = await fetch(url);
      const data = await res.json();
      const days = dailyfilter(data.daily);
      dispatch({
        type: FETCH_WEATHER,
        payload: {
          current: data.current,
          weather: data.current.weather[0],
          Timezone: data.timezone,
          Hours: data.hourly,
          isloading: false,
          days,
        },
      });
    } catch (error) {}
  };
};
