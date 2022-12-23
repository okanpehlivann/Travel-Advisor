import { ImageSourcePropType, Text, View, Image } from "react-native";
import React, { Component } from "react";

export type TDiscoverHeader = {
  title: string;
  desc: string;
  image: ImageSourcePropType;
};

export const DiscoverHeader = ({ title, desc, image }: TDiscoverHeader) => {
  return (
    <View className="flex-row items-center justify-between px-8">
      <View className="flex-column space-y-2">
        <Text className="text-[40px] text-[#0B646B] font-bold">{title}</Text>
        <Text className="text-[36px] text-[#527283]">{desc}</Text>
      </View>

      <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center shadow-lg">
        <Image
          source={image}
          className="w-full h-full rounded-md object-cover"
        />
      </View>
    </View>
  );
};

export default DiscoverHeader;
