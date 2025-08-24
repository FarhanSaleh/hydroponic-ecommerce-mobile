import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import "react-native-reanimated";

export default function RootLayout() {
  // const [loaded] = useFonts({
  //   SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  // });

  // if (!loaded) {
  //   // Async font loading only occurs in development.
  //   return null;
  // }

  return (
    <>
      <StatusBar />
      <Stack>
        <Stack.Screen name="user/(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="user/(stack)" options={{ headerShown: false }} />
        <Stack.Screen name="admin/(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/register" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  );
}
