import { Payload } from "../component/Interface";

export const FETCH_WEATHER = "FETCH_WEATHER";

export interface FETCHWEATHER {
  type: typeof FETCH_WEATHER;
  payload: Payload;
}
