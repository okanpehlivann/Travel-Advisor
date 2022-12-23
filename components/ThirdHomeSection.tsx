import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { HeroImage } from "../assets";
import * as Animatable from "react-native-animatable";

export type TThirdHomeSection = {
  buttonName: string;
  goToDiscover: () => void;
};

const ThirdHomeSection = ({ buttonName, goToDiscover }: TThirdHomeSection) => {
  return (
    <View className="flex-1 relative items-center justify-center">
      <Animatable.Image
        animation="fadeIn"
        easing="ease-in-out"
        className="w-full h-full object-cover mt-20"
        source={HeroImage}
      />

      <TouchableOpacity
        onPress={goToDiscover}
        className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center"
      >
        <Animatable.View
          animation={"pulse"}
          easing="ease-in-out"
          iterationCount={"infinite"}
          className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]"
        >
          <Text className="text-gray-50 text-[36px] font-semibold">
            {buttonName}
          </Text>
        </Animatable.View>
      </TouchableOpacity>
    </View>
  );
};

export default ThirdHomeSection;
