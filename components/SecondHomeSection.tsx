import { View, Text } from "react-native";
import React from "react";

export type TSecondHomeSection = {
  header: string;
  title: string;
  desc: string;
};

const SecondHomeSection = ({ header, title, desc }: TSecondHomeSection) => {
  return (
    <View className="px-6 mt-8 space-y-3">
      <Text className="text-[#3c6072] text-[42px]">{header}</Text>
      <Text className="text-[#00BCC9] text-[30px] font-bold">{title}</Text>
      <Text className="text-[#3c6072] text-base">{desc}</Text>
    </View>
  );
};

export default SecondHomeSection;
