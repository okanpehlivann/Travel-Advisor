import { View } from "react-native";
import React from "react";
import {
  GooglePlaceData,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
import { GOOGLE_MAP_KEY } from "@env";

export type TGoogleMapSearch = {
  selectCountry: (data: GooglePlaceData, details: any) => void;
};

const GoogleMapSearch = ({ selectCountry }: TGoogleMapSearch) => {
  return (
    <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
      <GooglePlacesAutocomplete
        GooglePlacesDetailsQuery={{ fields: "geometry" }}
        placeholder="Search"
        fetchDetails={true}
        onPress={(data: GooglePlaceData, details = null) =>
          selectCountry(data, details)
        }
        query={{
          key: `${GOOGLE_MAP_KEY}`,
          language: "en",
        }}
      />
    </View>
  );
};

export default GoogleMapSearch;
