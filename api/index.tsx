import { XRapidAPIHost, XRapidAPIKey } from "@env";
import { request } from "./axios-utils";

export type TGetRestaurantReq = {
  bl_latitude: string;
  tr_latitude: string;
  bl_longitude: string;
  tr_longitude: string;
  type: string;
};

export const getPlacesData = async ({
  bl_latitude,
  tr_latitude,
  bl_longitude,
  tr_longitude,
  type,
}: TGetRestaurantReq) => {
  console.log("TYPE => ", type);

  try {
    const {
      data: { data },
    } = await request({
      url: `/restaurants/list-in-boundary`,
      params: {
        bl_latitude: bl_latitude ? bl_latitude : "11.847676",
        tr_latitude: tr_latitude ? tr_latitude : "12.838442",
        bl_longitude: bl_longitude ? bl_longitude : "109.095887",
        tr_longitude: tr_longitude ? tr_longitude : "109.149359",
        limit: "30",
        currency: "USD",
        lunit: "km",
        lang: "en_US",
      },
      headers: {
        "X-RapidAPI-Key": `${XRapidAPIKey}`,
        "X-RapidAPI-Host": `${XRapidAPIHost}`,
      },
    });

    return data;
  } catch (error) {}
};
