import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import DiscoverHeader from "../components/DiscoverHeader";
import { Attractions, Avatar, Hotels, Restaurants } from "../assets";
import GoogleMapSearch from "../components/GoogleMapSearch";
import { getRestaurants } from "../services/service";
import MenuContainer from "../components/MenuContainer";
import { MaterialIcons } from "@expo/vector-icons";
import ItemCardContainer from "../components/ItemCardContainer";

const Discover = () => {
  const [restaurants, setRestaurants] = useState({});
  const [type, setType] = useState("restaurants");

  const navigation = useNavigation();

  const selectCountry = () => {
    const requestObj = {
      bl_latitude: "11.847676",
      tr_latitude: "12.838442",
      bl_longitude: "109.095887",
      tr_longitude: "109.149359",
    };

    getRestaurants(requestObj).then((restaurants: any) => {
      console.log("Restaurants =>> ", restaurants);
      setRestaurants(restaurants);
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <DiscoverHeader title="Discover" desc="the beauty today" image={Avatar} />
      <GoogleMapSearch selectCountry={selectCountry} />

      {/* MenuContainer */}
      <ScrollView>
        <View className="flex-row items-center justify-between px-8 mt-8">
          <MenuContainer
            key={"hotel"}
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
              <MaterialIcons name="arrow-right-alt" size={24} color="#A0C4C7" />
            </TouchableOpacity>
          </View>

          <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
            <ItemCardContainer
              key={"101"}
              imageSrc={
                "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              }
              title="Something a very long"
              location="Doha"
            />
            <ItemCardContainer
              key={"102"}
              imageSrc={
                "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              }
              title="Sample"
              location="Qatar"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );

  // 2.22 - Loading Spinner
};

export default Discover;
