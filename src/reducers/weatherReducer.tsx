import { Fetch_Weather } from "../action/constant";

const initialstate = {
  days: [],
  current: [],
  weather: [],
};

export default function (state = initialstate, action: any) {
  switch (action.type) {
    case Fetch_Weather:
      return {
        ...state,
        current: action.payload.current,
        weather: action.payload.weather,
      };

    default:
      return state;
  }
}
