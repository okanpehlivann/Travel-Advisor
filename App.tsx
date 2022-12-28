import "tailwindcss-react-native/types.d";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Discover from "./screens/Discover";
import HomeScreen from "./screens/HomeScreen";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TailwindProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Discover" component={Discover} />
          </Stack.Navigator>
        </NavigationContainer>
      </TailwindProvider>
    </QueryClientProvider>
  );
}
