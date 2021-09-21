import React from "react";
import { View, Image, Text, ScrollView } from "react-native";

const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Pickup",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../assets/images/desserts.png"),
    text: "Desserts",
  },
];

export default function Categories() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((item: any, index: any) => (
        <View
          key={index}
          style={{ alignItems: "center", marginRight: 30, marginTop: 10 }}
        >
          <Image
            source={item.image}
            style={{ width: 50, height: 50, resizeMode: "contain" }}
          />
          <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
