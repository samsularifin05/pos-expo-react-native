import { Dimensions, StyleSheet } from "react-native";
const WIDTH = Dimensions.get("screen").width;

export const StyleSidebar = StyleSheet.create({
    logo: {
        width: 60,
        height: 60,
        resizeMode: "contain"
      },
      logoMenu: {
        width: 60,
        height: 40,
        resizeMode: "contain",
        marginBottom: 10
      },
  });
