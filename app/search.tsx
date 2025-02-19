import "../global.css";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Text,
  TextInput,
} from "react-native";
import FoodListItem from "../components/FoodListItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const query = gql`
  query MyQuery($ingr: String) {
    search(ingr: $ingr) {
      hints {
        food {
          label
          brand
          foodId
          nutrients {
            ENERC_KCAL
          }
        }
      }
    }
  }
`;

export default function SearchScreen() {
  const [search, setsearch] = useState("");

  const [runSearch, { data, loading, error }] = useLazyQuery(query);

  const performSearch = () => {
    runSearch({ variables: { ingr: search } });
    setsearch("");
  };

  if (error) {
    return <Text>Failed to search</Text>;
  }

  const items = data?.search?.hints || [];

  return (
    <SafeAreaView className="p-4 gap-4">
      <TextInput
        value={search}
        onChangeText={setsearch}
        placeholder="Search..."
        className="bg-gray-200 rounded-full p-4"
      />
      {search && <Button title="Search" onPress={performSearch} />}

      {loading && <ActivityIndicator />}
      <FlatList
        data={items}
        renderItem={({ item }) => <FoodListItem item={item} />}
        ListEmptyComponent={() => (
          <Text className="text-center">Search foods</Text>
        )}
        contentContainerClassName="gap-4"
      />
    </SafeAreaView>
  );
}
