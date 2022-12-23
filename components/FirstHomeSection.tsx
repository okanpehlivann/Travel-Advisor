import React from "react";
import { View, Text } from "react-native";

export type TFirstHomeSection = {
  buttonName: string;
  title: string;
};

export const FirstHomeSection = ({ buttonName, title }: TFirstHomeSection) => {
  return (
    <View className="flex-row px-6 mt-8 items-center space-x-2">
      <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
        <Text className="text-[#00BCC9] text-3xl font-semibold">
          {buttonName}
        </Text>
      </View>

      <Text className="text-[#2A2B4B] text-3xl font-semibold">{title}</Text>
    </View>
  );
};

export default FirstHomeSection;
