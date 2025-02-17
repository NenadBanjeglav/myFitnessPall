import "../global.css";
import { Button, FlatList, Text, TextInput } from "react-native";

import FoodListItem from "../components/FoodListItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

const foodItems = [
  { label: "Pizza", cal: "75", brand: "Dominos" },
  { label: "Chicken breast raw", cal: "120", brand: "Lidl" },
  { label: "Apple", cal: "95", brand: "Organic Farms" },
  { label: "Banana", cal: "105", brand: "Chiquita" },
  { label: "Eggs", cal: "70", brand: "Happy Eggs" },
  { label: "Greek Yogurt", cal: "150", brand: "Fage" },
  { label: "Peanut Butter", cal: "190", brand: "Skippy" },
  { label: "Rice (cooked)", cal: "206", brand: "Uncle Ben's" },
  { label: "Steak", cal: "250", brand: "Angus Beef" },
  { label: "Salmon (grilled)", cal: "200", brand: "Norwegian Fishery" },
  { label: "Protein Bar", cal: "220", brand: "Quest" },
  { label: "Avocado", cal: "234", brand: "Hass" },
  { label: "Almonds", cal: "160", brand: "Blue Diamond" },
  { label: "Orange Juice", cal: "110", brand: "Tropicana" },
  { label: "Cereal", cal: "150", brand: "Kellogg's" },
  { label: "Cheese", cal: "113", brand: "Kraft" },
  { label: "Whole Wheat Bread", cal: "80", brand: "Nature's Own" },
  { label: "Dark Chocolate", cal: "170", brand: "Lindt" },
  { label: "Tofu", cal: "94", brand: "House Foods" },
  { label: "Pasta", cal: "210", brand: "Barilla" },
];

export default function App() {
  const [search, setsearch] = useState("");

  const performSearch = () => {
    console.warn("Searching for: ", search);

    setsearch("");
  };

  return (
    <SafeAreaView className="p-4 gap-4">
      <TextInput
        value={search}
        onChangeText={setsearch}
        placeholder="Search..."
        className="bg-gray-200 rounded-full p-4"
      />
      {search && <Button title="Search" onPress={performSearch} />}

      <FlatList
        data={foodItems}
        renderItem={({ item }) => <FoodListItem item={item} />}
        contentContainerClassName="gap-4"
      />
    </SafeAreaView>
  );
}
