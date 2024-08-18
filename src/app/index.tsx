import { Text, View } from "react-native";
import { FONT } from "../utils/CommonStyles";
import { textScale } from "../utils/Responsive";
import { CustomText } from "../components/CustomText";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontFamily: FONT.raleway800, fontSize: textScale(30) }}>
        Where is my train clone
      </Text>
      <Text>Where is my train clone</Text>
      <CustomText type="title">All Text Style</CustomText>
      <Link href={"/(drawer)/timetable"}>
        <CustomText type="title">Go to Drawer</CustomText>
      </Link>
    </View>
  );
}
