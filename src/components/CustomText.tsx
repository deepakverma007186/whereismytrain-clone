import { StyleSheet, Text, type TextProps } from "react-native";
import { COLORS } from "../utils/Colors";
import { FONT, SIZE } from "../utils/CommonStyles";
import { textScale } from "../utils/Responsive";

export type CustomTextProps = TextProps & {
  color?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function CustomText({
  style,
  color = COLORS.gray,
  type = "default",
  ...rest
}: CustomTextProps) {
  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontFamily: FONT.raleway400,
    fontSize: textScale(16),
    lineHeight: SIZE.base * 2,
  },
  defaultSemiBold: {
    fontFamily: FONT.raleway600,
    fontSize: textScale(16),
    lineHeight: SIZE.base * 2,
  },
  title: {
    fontFamily: FONT.raleway700,
    fontSize: textScale(32),
    lineHeight: SIZE.lg * 2,
  },
  subtitle: {
    fontFamily: FONT.raleway700,
    fontSize: textScale(20),
  },
  link: {
    fontFamily: FONT.raleway500,
    fontSize: textScale(20),
    lineHeight: SIZE.xl * 1.5,
    color: COLORS.secondary,
  },
});
