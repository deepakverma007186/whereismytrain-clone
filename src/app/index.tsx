import { Text, View } from "react-native";
import { FONT } from "../utils/CommonStyles";
import { textScale } from "../utils/Responsive";
import { CustomText } from "../components/CustomText";

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
    </View>
  );
}
