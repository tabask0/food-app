import React from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import Antdesign from "react-native-vector-icons/AntDesign";

export default function SearchBar() {
  return (
    <View
      style={{
        marginTop: 10,
        marginBottom: 10,
        flexDirection: "row",
      }}
    >
      <GooglePlacesAutocomplete
        placeholder="Search"
        query={{
          key: "AIzaSyCcolHovTwuMWF-mz7lrdhUB6WTf4xWLas",
          language: "en",
        }}
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
            width: "100%",
            alignSelf: "center",
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 15 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              marginLeft: 16,
              marginRight: 10,
              flexDirection: "row",
              backgroundColor: "white",
              padding: 10,
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <Antdesign
              name="clockcircle"
              size={10}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}
