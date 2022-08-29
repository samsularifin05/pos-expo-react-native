import { Dimensions, StyleSheet } from "react-native";
const WIDTH = Dimensions.get("screen").width;

export const StyleHome = StyleSheet.create({
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
      titileWrapper: {
        width: "40%", justifyContent: "center"
      }
    },
  
    logo: {
      width: WIDTH * 0.8,
      height: 60,
      resizeMode: "contain"
    },
    logoMenu: {
      width: WIDTH * 0.8,
      height: 40,
      resizeMode: "contain",
      marginBottom: 10
    },
    logotable: {
      width: 30,
      height: 40,
      resizeMode: "contain",
      marginLeft: 10
    },
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

