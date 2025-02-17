import "../global.css";
import { View } from "react-native";

import FoodListItem from "../components/FoodListItem";

export default function App() {
  return (
    <View className="justify-center items-center flex-1 p-4 gap-2">
      <FoodListItem item={{ label: "Pizza", cal: "75", brand: "Dominos" }} />
      <FoodListItem
        item={{ label: "Chicken breast raw", cal: "120", brand: "Lidl" }}
      />
    </View>
  );
}
