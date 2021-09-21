import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import Categories from "./components/Categories";
import HeaderComponent from "./components/Header";
import RestaurantItem from "./components/RestaurantItem";
import SearchBar from "./components/SearchBar";
import { Divider } from "react-native-elements";
import BottomTabs from "./components/BottomTabs";

export default function App() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#eee",
        flex: 1,
      }}
    >
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderComponent />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ padding: 10 }}>
        <Categories />
        <RestaurantItem />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
