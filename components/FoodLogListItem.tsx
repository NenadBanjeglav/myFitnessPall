import { View, Text } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

//@ts-ignore
const FoodLogListItem = ({ item }) => {
  return (
    <View className="bg-gray-400 p-4 rounded-md w-full gap-2 flex-row justify-between items-center">
      <View className="flex-1 gap-2">
        <Text className="font-bold">{item.label}</Text>
        <Text className="color-gray-500">{item.kcal} cal</Text>
      </View>
    </View>
  );
};

export default FoodLogListItem;
