import { View, SafeAreaView, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import FirstHomeSection from "../components/FirstHomeSection";
import SecondHomeSection from "../components/SecondHomeSection";
import Circle from "../components/Circle";
import ThirdHomeSection from "../components/ThirdHomeSection";

const HomeScreen = () => {
  const navigation = useNavigation();

  const goToDiscover = (): void => {
    // navigation.navigate("Discover");
  };

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <FirstHomeSection buttonName="Go" title="Travel" />

      <SecondHomeSection
        header="Enjoy the trip with"
        title="Good Moments"
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero officia
        tempora odio labore maiores!"
      />

      <Circle />

      <ThirdHomeSection goToDiscover={goToDiscover} buttonName="Go" />
    </SafeAreaView>
  );
};

export default HomeScreen;
