import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import DiscoverHeader from "../components/DiscoverHeader";
import { Attractions, Avatar, Hotels, NotFound, Restaurants } from "../assets";
import GoogleMapSearch from "../components/GoogleMapSearch";
import MenuContainer from "../components/MenuContainer";
import { MaterialIcons } from "@expo/vector-icons";
import ItemCardContainer from "../components/ItemCardContainer";
import { getPlacesData, TGetRestaurantReq } from "../api";
import { GooglePlaceData } from "react-native-google-places-autocomplete";

const Discover = () => {
  const [bl_lat, setBl_lat] = useState(null);
  const [bl_lng, setBl_lng] = useState(null);
  const [tr_lat, setTr_lat] = useState(null);
  const [tr_lng, setTr_lng] = useState(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [mainData, setMainData] = useState([]);
  const [type, setType] = useState("restaurants");

  useEffect(() => {
    setIsLoading(true);

    const requestObj = {
      bl_latitude: bl_lat,
      tr_latitude: tr_lat,
      bl_longitude: bl_lng,
      tr_longitude: tr_lng,
      type: type,
    };

    getPlaces(requestObj);
  }, [bl_lat, bl_lng, tr_lat, tr_lng, type]);

  const selectCountry = (googlePlaceData: GooglePlaceData, details: any) => {
    const viewPort = details?.geometry?.viewport;

    setBl_lat(viewPort?.southwest?.lat);
    setBl_lng(viewPort?.southwest?.lng);
    setTr_lat(viewPort?.northeast?.lat);
    setTr_lng(viewPort?.northeast?.lng);
  };

  const getPlaces = (placesReq: TGetRestaurantReq) => {
    getPlacesData(placesReq).then((data) => {
      setMainData(data);
      setInterval(() => {
        setIsLoading(false);
      }, 1000);
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <DiscoverHeader title="Discover" desc="the beauty today" image={Avatar} />
      <GoogleMapSearch selectCountry={selectCountry} />

      {/* MenuContainer */}
      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row items-center justify-between px-8 mt-8">
            <MenuContainer
              key={"hotels"}
              title="Hotels"
              imageSrc={Hotels}
              type={type}
              setType={setType}
            />

            <MenuContainer
              key={"attractions"}
              title="Attractions"
              imageSrc={Attractions}
              type={type}
              setType={setType}
            />

            <MenuContainer
              key={"restaurants"}
              title="Restaurants"
              imageSrc={Restaurants}
              type={type}
              setType={setType}
            />
          </View>

          <View>
            <View className="flex-row items-center justify-between mt-8 px-4">
              <Text className="text-[#2C7379] text-[28px] font-bold">
                Top Tips
              </Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                <Text className="text-[#A0C4C7] text-[20px] font-bold">
                  Explore
                </Text>
                <MaterialIcons
                  name="arrow-right-alt"
                  size={24}
                  color="#A0C4C7"
                />
              </TouchableOpacity>
            </View>

            <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
              {mainData?.length > 0 ? (
                <>
                  {mainData?.map((data, index: number) => (
                    <ItemCardContainer
                      key={index}
                      imageSrc={
                        data?.photo?.images?.medium?.url
                          ? data?.photo?.images?.medium?.url
                          : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"
                      }
                      title={data?.name}
                      location={data?.location_string}
                      data={data}
                    />
                  ))}
                </>
              ) : (
                <>
                  <View className="w-full h-[400px] items-center space-y-8 justify-center">
                    <Image
                      source={NotFound}
                      className="w-32 h-32 object-cover"
                    />

                    <Text className="text-2xl text-[#428288] font-semibold">
                      Oops... No data found
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );

  // 2.22 - Loading Spinner
};

export default Discover;
