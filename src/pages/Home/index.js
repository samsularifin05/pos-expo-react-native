import { View, ScrollView } from "react-native";
import React from "react";
import { Card } from "../../component";
import images from "../../../images";
import { StyleHome } from "./style";
import Sidebar from "../../component/Sidebar";
import Cart from "../Cart";

const Home = () => {
  return (
    <View style={StyleHome.container}>
      <View style={StyleHome.left}>
       <Sidebar />
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
       <Cart />
      </View>
    </View>
  );
};

export default Home;

// https://seantheme.com/color-admin/admin/html/pos_customer_order.html
