import { Image, Text, View } from "react-native";
import React from "react";
import { StyleCart } from "./style";
import images from "../../../images";

const Cart = () => {
  return (
    <View>
      <View style={StyleCart.headerTabel}>
        <View style={StyleCart.headerWrapper}>
          <View>
            <Image source={images.icTabel} style={StyleCart.headerWrapper.logotable} />
          </View>
          <View style={StyleCart.headerWrapper.titleWrapper}>
            <Text style={StyleCart.headerWrapper.titleTable}>Tabel 01</Text>
          </View>
          <View style={StyleCart.headerWrapper.headerOrder}>
            <Text style={StyleCart.headerWrapper.noorder}> Order: #0056</Text>
          </View>
        </View>
      </View>
      <View>
        <Text>Hai</Text>
      </View>
    </View>
  );
};

export default Cart;
