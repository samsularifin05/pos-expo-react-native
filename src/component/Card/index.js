import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Card = ({ img, emty }) => {
  return (
    <TouchableOpacity style={emty ? styles.emtycard : styles.card}>
      {img && <Image source={img} style={styles.card.imgbanner} />}
      {emty != true && (
        <View style={styles.content}>
          <Text style={styles.content.title}>Grill Chicken Chop®</Text>
          <Text style={styles.content.desc}>chicken, egg, mushroom, salad</Text>
          <Text style={styles.content.price}>$10.99</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  content: {
    padding: 15,
    title: {
    //   fontWeight : 660
      
    },
    desc: {
      color: "#adb5bd",
      marginTop: 5
    },
    price: {
      marginTop: 10
    }
  },
  card: {
    backgroundColor: "white",
    height: 250,
    width: 300,
    marginTop: 20,
    borderRadius : 10,
    imgbanner: {
      width: 300,
      height: 159
    }
  },
  emtycard: {
    backgroundColor: "",
    height: 100,
    width: 300,
    marginTop: 20
  }
});
