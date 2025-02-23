import { View, Text } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "expo-router";

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

const mutation = gql`
  mutation MyMutation(
    $food_id: String!
    $kcal: Int!
    $label: String!
    $user_id: String!
  ) {
    insertFood_log(
      food_id: $food_id
      kcal: $kcal
      label: $label
      user_id: $user_id
    ) {
      created_at
      food_id
      id
      kcal
      label
      user_id
    }
  }
`;

const FoodListItem: React.FC<FoodListItemProps> = ({ item }) => {
  const [logFood, { data, loading, error }] = useMutation(mutation, {
    refetchQueries: ["foodLogsForDate"],
  });
  const router = useRouter();
  const onPlusPressed = async () => {
    await logFood({
      variables: {
        food_id: item.food.foodId,
        kcal: item.food.nutrients.ENERC_KCAL,
        label: item.food.label,
        user_id: "nenad",
      },
    });
    router.back();
  };

  return (
    <View className="bg-gray-400 p-4 rounded-md w-full gap-2 flex-row justify-between items-center">
      <View className="flex-1 gap-2">
        <Text className="font-bold">{item.food.label}</Text>
        <Text className="color-gray-500">
          {item.food.nutrients.ENERC_KCAL} cal, {item.food.brand}
        </Text>
      </View>
      <AntDesign
        name="pluscircleo"
        size={24}
        color="blue"
        onPress={onPlusPressed}
      />
    </View>
  );
};

export default FoodListItem;
