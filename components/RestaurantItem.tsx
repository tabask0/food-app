import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {localRestaurants.map((restaurant: any, index: any) => (
        <View key={index} style={{ marginTop: 15, backgroundColor: "white" }}>
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo
            name={restaurant.name}
            price={restaurant.price}
            reviews={restaurant.reviews}
            rating={restaurant.rating}
          />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = (props: any) => (
  <>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 35, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={30} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props: any) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
      marginRight: 24,
      marginLeft: 24,
      marginBottom: 10,
      padding: 5,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 11, color: "gray" }}>
        25-35 • min •{" "}
        <Text style={{ fontSize: 15, fontWeight: "700" }}>{props.price}</Text>
      </Text>
    </View>
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Icon name="star" style={{ marginRight: 5 }} />
      <Text>{props.reviews}</Text>
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
      <Text>{props.rating}</Text>
    </View>
  </View>
);

const localRestaurants = [
  {
    name: "McDonald's",
    image_url:
      "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/04/mcdonalds-pti-1617962583.jpg",
    categories: ["Fast Food", "Cafe"],
    price: "$$",
    reviews: 4219,
    rating: 3.6,
  },
  {
    name: "Kentucky Fried Chicken",
    image_url:
      "https://www.kfc.ro/uploads/static/home_page/2400x1246-hp.jpg-freshness.jpg",
    categories: ["Fast Food"],
    price: "$",
    reviews: 3719,
    rating: 4.1,
  },
  {
    name: "Cuptorul cu Lemne",
    image_url:
      "https://www.restocracy.ro/wp-content/uploads/2018/01/Interviu-Restocracy-cu-Constantin-Vladareanu-patronul-pizzeriilor-Cuptorul-cu-Lemne-3.jpg",
    categories: ["Restaurant", "Bar"],
    price: "$$$",
    reviews: 419,
    rating: 4.7,
  },
];
