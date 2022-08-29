import { Image, Text, View, ScrollView } from "react-native";
import React from "react";
import Images from "../../../images";
import { Card, Gap } from "../../component";
import images from "../../../images";
import { StyleHome } from "./style";

const Home = () => {
  return (
    <View style={StyleHome.container}>
      <View style={StyleHome.left}>
        <Image source={Images.logo} style={StyleHome.logo} />
        <Text>Pine & Dine</Text>
        <Gap height={40} />
        <Image source={Images.utensils} style={StyleHome.logoMenu} />
        <Text> All Dishes</Text>
        <Gap height={40} />
        <Image source={Images.drumstick} style={StyleHome.logoMenu} />
        <Text> Meat</Text>
      </View>
      <View style={StyleHome.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={StyleHome.contentWrapper}>
            <Card img={images.produk1} />
            <Card img={images.produk1} />
            <Card img={images.produk1} />
            <Card img={images.produk1} />
            <Card img={images.produk1} />
            <Card emty />
          </View>
        </ScrollView>
      </View>
      <View style={StyleHome.right}>
        <View style={StyleHome.headerTabel}>
          <View style={StyleHome.headerWrapper}>
            <View>
              <Image source={Images.icTabel} style={StyleHome.logotable} />
            </View>
            <View style={StyleHome.headerWrapper.titleWrapper}>
              <Text style={StyleHome.headerWrapper.titleTable}>Tabel 01</Text>
            </View>
            <View style={StyleHome.headerWrapper.headerOrder}>
              <Text style={StyleHome.headerWrapper.noorder}> Order: #0056</Text>
            </View>
          </View>
        </View>
        <View>
          <Text>Hai</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;


// https://seantheme.com/color-admin/admin/html/pos_customer_order.html