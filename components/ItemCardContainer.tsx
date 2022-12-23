import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export type TItemCardContainer = {
  title: string;
  location: string;
  imageSrc: string;
};

const ItemCardContainer = ({
  imageSrc,
  title,
  location,
}: TItemCardContainer) => {
  return (
    <TouchableOpacity className="rounded-md border border-gray-300 space-y-2 px-3 py-3 shadow-md bg-white w-[182px] my-2">
      <Image
        source={{ uri: imageSrc }}
        className="w-full h-40 rounded-md object-cover"
      />

      <Text className="text-[#A0C4C7] text-[20px] font-bold">
        {title?.length > 14 ? `${title.slice(0, 14)}..` : title}
      </Text>

      <View className="flex-row items-center space-x-1">
        <FontAwesome name="map-marker" size={24} color="#8597A2" />
        <Text className="text-[#428288] text-[14px] font-bold">
          {location?.length > 18 ? `${title.slice(0, 18)}..` : location}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCardContainer;