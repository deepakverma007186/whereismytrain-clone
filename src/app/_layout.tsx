import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { COLORS } from "../utils/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { moderateScaleVertical } from "../utils/Responsive";

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
  const paddingTop =
    StatusBar.currentHeight == undefined
      ? -moderateScaleVertical(40)
      : -StatusBar.currentHeight;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1, paddingTop }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={`${COLORS.primary}`}
        />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(drawer)" />
        </Stack>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
