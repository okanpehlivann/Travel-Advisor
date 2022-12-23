import axios from "axios";

export type TGetRestaurantReq = {
  bl_latitude: string;
  tr_latitude: string;
  bl_longitude: string;
  tr_longitude: string;
};

export const getRestaurants = ({
  bl_latitude,
  tr_latitude,
  bl_longitude,
  tr_longitude,
}: TGetRestaurantReq) => {
  return new Promise((resolve, reject) => {
    const options = {
      method: "GET",
      url: "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary",
      params: {
        bl_latitude,
        tr_latitude,
        bl_longitude,
        tr_longitude,
        limit: "30",
        currency: "USD",
        lunit: "km",
        lang: "en_US",
      },
      headers: {
        "X-RapidAPI-Key": "82ce899748msh5ec91259a0c525cp186ebcjsn02d18a8c5030",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        resolve(response.data);
      })
      .catch(function (error) {
        reject(error);
      });
  });
};
