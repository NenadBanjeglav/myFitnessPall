import { View, Text, FlatList, Button, ActivityIndicator } from "react-native";
import React from "react";
import { Link } from "expo-router";

import { gql, useQuery } from "@apollo/client";
import FoodLogListItem from "../components/FoodLogListItem";

const query = gql`
  query MyQuery($date: Date!, $user_id: String!) {
    foodLogsForDate(date: $date, user_id: $user_id) {
      id
      created_at
      food_id
      label
      user_id
      kcal
    }
  }
`;

const HomeScreen = () => {
  const today = new Date();
  const formattedToday = today.toISOString().split("T")[0];
  const user_id = "nenad";
  const { data, loading, error } = useQuery(query, {
    variables: {
      date: formattedToday,
      user_id: user_id,
    },
  });

  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Failed to fetch data</Text>;
  }

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
        data={data.foodLogsForDate}
        renderItem={({ item }) => <FoodLogListItem item={item} />}
        contentContainerClassName="gap-4"
      />
    </View>
  );
};
7;
export default HomeScreen;
