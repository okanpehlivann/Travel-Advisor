import {
  View,
  Image,
  Text,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export type TMenuContainer = {
  title: string;
  imageSrc: ImageSourcePropType;
  type: string;
  setType: (title: string) => void;
};

const MenuContainer = ({ title, imageSrc, type, setType }: TMenuContainer) => {
  const handlePress = () => {
    setType(title.toLowerCase());
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="items-center justify-center space-y-2"
    >
      <View
        className={`w-24 h-24 p-2 shadow-sm rounded-full ${
          type === title.toLowerCase() ? "bg-gray-300" : ""
        }`}
      >
        <Image source={imageSrc} className="w-full h-full object-contain" />
      </View>
      <Text className="text-[#0BBCC9] text-xl font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;
