import { StyleSheet } from "react-native";

export const StyleCart = StyleSheet.create({
  headerTabel: {
    backgroundColor: "#6C757D",
    padding: 10,
    flexDirection: "row",
    alignContent: "center"
  },

  headerWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    titleTable: {
      color: "#FFFFFF",
      marginLeft: 10
    },
    logotable: {
      width: 30,
      height: 40,
      resizeMode: "contain",
      marginLeft: 10
    },
    headerOrder: {
      backgroundColor: "black",
      justifyContent: "center",
      borderRadius: 10,
      height: 20,
      margin: 10
    },
    noorder: {
      color: "#FFFFFF",
      fontSize: 10,
      marginLeft: 10,
      marginRight: 10
    },
    titleWrapper: {
      width: "40%",
      justifyContent: "center"
    }
  }
});
