import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Images from "../../../images";
import { StyleSidebar } from "./style";
import Gap from "../Gap";

const Sidebar = () => {
  return (
    <View style={{width : "70%", alignItems :"center"}}>
        <Image source={Images.logo} style={StyleSidebar.logo} />
        <Text>Pine & Dine</Text>
      <TouchableOpacity style={{alignItems :"center"}}>
        <Gap height={40} />
        <Image source={Images.utensils} style={StyleSidebar.logoMenu} />
        <Text> All Dishes</Text>
      </TouchableOpacity>
      <Gap height={40} />
      <TouchableOpacity style={{alignItems :"center"}}>
        <Image source={Images.drumstick} style={StyleSidebar.logoMenu} />
        <Text> Meat</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Sidebar;
