import React from "react";
import { View, Text } from "react-native";

const Circle = () => {
  return (
    <>
      <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36" />
      <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full absolute -bottom-32 -left-36" />
    </>
  );
};

export default Circle;
