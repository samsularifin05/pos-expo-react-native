import { StyleSheet } from "react-native";
export const StyleHome = StyleSheet.create({
  
    container: {
      flex: 1,
      flexDirection: "row"
    },
    left: {
      width: "10%",
      alignItems: "center",
      paddingTop: 40
    },
    right: {
      flex: 1
    },
    content: {
      padding: 20,
      width: "70%",
      backgroundColor: "#E9ECEF"
    },
    contentWrapper: {
      flexDirection: "row",
      flexWrap: "wrap",
      flex: 1,
      justifyContent: "space-between"
    }
  });

