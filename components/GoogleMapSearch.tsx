import { View } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export type TGoogleMapSearch = {
  selectCountry: () => void;
};

const GoogleMapSearch = ({ selectCountry }: TGoogleMapSearch) => {
  return (
    <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
      <GooglePlacesAutocomplete
        GooglePlacesDetailsQuery={{ fields: "geometry" }}
        placeholder="Search"
        fetchDetails={true}
        onPress={selectCountry}
        query={{
          key: "AIzaSyBn6-YIqaDsiLlV5n8rM0-pOez3KFuNaFY",
          language: "en",
        }}
      />
    </View>
  );
};

export default GoogleMapSearch;
