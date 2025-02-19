import { View, Text, FlatList, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

import FoodListItem from "../components/FoodListItem";

const foodItems = [
  {
    food: {
      label: "Apple",
      brand: "Fresh Farms",
      foodId: "123",
      nutrients: {
        ENERC_KCAL: 52,
      },
    },
  },
  {
    food: {
      label: "Banana",
      brand: "Organic Growers",
      foodId: "456",
      nutrients: {
        ENERC_KCAL: 89,
      },
    },
  },
  {
    food: {
      label: "Chicken Breast",
      brand: "Premium Meats",
      foodId: "789",
      nutrients: {
        ENERC_KCAL: 165,
      },
    },
  },
];

const HomeScreen = () => {
  return (
    <View className="bg-white flex-1 p-4 gap-4">
      <View className="flex-row justify-between">
        <Text className="text-lg font-semibold">Today's food</Text>
        <Link href="/search" asChild>
          <Button title="Add Food" />
        </Link>
      </View>
      <View className="flex-row justify-between">
        <Text className="text-lg font-semibold">Calories</Text>
        <Text className="">1770 - 360 = 1692</Text>
      </View>
      <FlatList
        data={foodItems}
        renderItem={({ item }) => <FoodListItem item={item} />}
        contentContainerClassName="gap-4"
      />
    </View>
  );
};

export default HomeScreen;
