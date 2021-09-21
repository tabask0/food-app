import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      <View style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
        <RestaurantImage />
        <RestaurantInfo />
      </View>
    </TouchableOpacity>
  );
}

const RestaurantImage = () => (
  <View style={{ top: 15 }}>
    <Image
      source={{
        uri: "https://i.pinimg.com/originals/5f/93/03/5f9303c8a1127f572b061c7632bb3d77.jpg",
      }}
      style={{ width: "100%", height: 180 }}
      resizeMode={"center"}
    />
    <TouchableOpacity style={{ position: "absolute", right: 35, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={30} color="#fff" />
    </TouchableOpacity>
  </View>
);

const RestaurantInfo = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 25,
      marginRight: 24,
      marginLeft: 24,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        BurgerKing Reloaded
      </Text>
      <Text style={{ fontSize: 11, color: "gray" }}>25-35 • min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>4.2</Text>
    </View>
  </View>
);
