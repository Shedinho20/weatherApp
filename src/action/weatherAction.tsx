import { Fetch_Weather } from "../action/constant";

export const fetchWeather = () => {
  return async function (dispatch) {
    try {
      let position: any;
      position = await getCoordinates();
      const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=c4bf502f01ad796b2ae93a93063fccb2`;
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: Fetch_Weather,
        payload: { current: data.current, weather: data.current.weather[0] },
      });
    } catch (error) {}
  };
};

const getCoordinates = (option = {}) => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, option);
  });
};
