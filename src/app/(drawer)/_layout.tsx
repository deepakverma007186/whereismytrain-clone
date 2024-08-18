import { CustomText } from "@/src/components/CustomText";
import { options } from "@/src/constants/drawerOptions";
import { ICONS } from "@/src/constants/icons";
import { COLORS } from "@/src/utils/Colors";
import { FONT } from "@/src/utils/CommonStyles";
import {
  height,
  moderateScale,
  moderateScaleVertical,
  textScale,
  width,
} from "@/src/utils/Responsive";
import { DrawerItemList } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { Image, StatusBar, StyleSheet, View } from "react-native";

export default function _Layout() {
  return (
    <Drawer
      screenOptions={{
        drawerPosition: "left",
        drawerType: "permanent",
        // drawerType: "front",
        drawerStyle: {
          backgroundColor: COLORS.primary,
          width: width * 0.84,
        },
        drawerLabelStyle: {
          color: COLORS.white,
          fontFamily: FONT.raleway600,
          fontSize: textScale(18),
        },
      }}
      drawerContent={(props) => <DrawerUpperSection {...props} />}
    >
      {options?.map((option) => (
        <Drawer.Screen
          key={option?.id}
          name={option?.name}
          options={{ drawerLabel: option?.title, drawerIcon: option?.icon }}
        />
      ))}
    </Drawer>
  );
}

const DrawerUpperSection = (props: any) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageTitleWrapper}>
          <View style={styles.imageContainer}>
            <Image
              source={ICONS.logo}
              style={{ width: "100%", height: "100%" }}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              rowGap: moderateScaleVertical(6),
              paddingRight: moderateScale(16),
            }}
          >
            <CustomText
              type="subtitle"
              color={COLORS.primary}
              style={styles.titleText}
            >
              Where is my Train
            </CustomText>
            <CustomText
              type="default"
              color={COLORS.primary}
              style={{ textAlign: "right", fontStyle: "italic" }}
            >
              from{" "}
              <CustomText
                type="subtitle"
                color={COLORS.gray}
                style={{ textAlign: "right" }}
              >
                Google
              </CustomText>
            </CustomText>
          </View>
        </View>
        <CustomText type="link" style={styles.googleText}>
          Last Sync: 14-Aug-2024 15:04
        </CustomText>
      </View>
      <DrawerItemList {...props} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: COLORS.white,
    justifyContent: "space-between",
  },
  imageTitleWrapper: {
    flexDirection: "row",
    marginTop: height * 0.05,
    marginBottom: height * 0.04,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: moderateScale(16),
  },
  imageContainer: {
    width: width * 0.2,
    aspectRatio: 1,
  },
  titleText: {
    textAlign: "right",
    fontSize: textScale(24),
    fontFamily: FONT.raleway500,
  },
  googleText: {
    textAlign: "right",
    fontSize: textScale(14),
    color: COLORS.primary,
    paddingHorizontal: moderateScale(16),
  },
});
