import { View, Text } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

interface Nutrients {
  ENERC_KCAL: number;
}

interface Food {
  label: string;
  brand?: string;
  foodId: string;
  nutrients: Nutrients;
}

interface HintsEntry {
  food: Food;
}

interface FoodListItemProps {
  item: HintsEntry;
}

const FoodListItem: React.FC<FoodListItemProps> = ({ item }) => {
  return (
    <View className="bg-gray-400 p-4 rounded-md w-full gap-2 flex-row justify-between items-center">
      <View className="flex-1 gap-2">
        <Text className="font-bold">{item.food.label}</Text>
        <Text className="color-gray-500">
          {item.food.nutrients.ENERC_KCAL} cal, {item.food.brand}
        </Text>
      </View>
      <AntDesign name="pluscircleo" size={24} color="blue" />
    </View>
  );
};

export default FoodListItem;
