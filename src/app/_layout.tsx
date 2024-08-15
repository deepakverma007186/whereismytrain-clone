import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

export default function RootLayout() {
  const [loaded] = useFonts({
    raleway100: require("../assets/fonts/Raleway-Thin.ttf"),
    raleway200: require("../assets/fonts/Raleway-ExtraLight.ttf"),
    raleway300: require("../assets/fonts/Raleway-Light.ttf"),
    raleway400: require("../assets/fonts/Raleway-Regular.ttf"),
    raleway500: require("../assets/fonts/Raleway-Medium.ttf"),
    raleway600: require("../assets/fonts/Raleway-SemiBold.ttf"),
    raleway700: require("../assets/fonts/Raleway-Bold.ttf"),
    raleway800: require("../assets/fonts/Raleway-ExtraBold.ttf"),
    raleway900: require("../assets/fonts/Raleway-Black.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
