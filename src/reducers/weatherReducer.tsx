import { FETCH_WEATHER, FETCHWEATHER } from "../action/constant";
import { State } from "../component/Interface";
const initialstate: State = {
  days: [],
  current: [],
  weather: [],
  Timezone: "",
  Hours: [],
  isLoading: true,
};

export default function (state = initialstate, action: FETCHWEATHER) {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        ...state,
        current: action.payload.current,
        weather: action.payload.weather,
        Timezone: action.payload.Timezone,
        days: action.payload.days,
        isLoading: false,
        Hours: action.payload.Hours,
      };

    default:
      return state;
  }
}
