import { StyleSheet } from "react-native";

export const SIZE = {
  xs: 4,
  sm: 8,
  base: 12,
  lg: 16,
  xl: 20,
};

export const FONT = {
  raleway100: "raleway100",
  raleway200: "raleway200",
  raleway300: "raleway300",
  raleway400: "raleway400",
  raleway500: "raleway500",
  raleway600: "raleway600",
  raleway700: "raleway700",
  raleway800: "raleway800",
  raleway900: "raleway900",
};

export const STYLES = StyleSheet.create({
  flexCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: SIZE.sm,
  },
  justify: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: SIZE.sm,
  },
});
