import { View, Text } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

interface FoodItem {
  label: string;
  cal: string;
  brand: string;
}

const FoodListItem = ({ item }: { item: FoodItem }) => {
  const { label, cal, brand } = item;
  return (
    <View className="bg-gray-400 p-4 rounded-md w-full gap-2 flex-row justify-between items-center">
      <View className="flex-1 gap-2">
        <Text className="font-bold">{label}</Text>
        <Text className="color-gray-500">
          {cal} cal, {brand}
        </Text>
      </View>
      <AntDesign name="pluscircleo" size={24} color="blue" />
    </View>
  );
};

export default FoodListItem;
