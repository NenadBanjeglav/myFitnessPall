import "../global.css";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Text,
  TextInput,
  View,
} from "react-native";
import FoodListItem from "../components/FoodListItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";

const query = gql`
  query MyQuery($ingr: String, $upc: String) {
    search(ingr: $ingr, upc: $upc) {
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
  const [scannerEnabled, setscannerEnabled] = useState(false);
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();

  const [runSearch, { data, loading, error }] = useLazyQuery(query);

  const performSearch = () => {
    runSearch({ variables: { ingr: search } });
    setsearch("");
  };

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View className="flex-1 justify-center">
        <Text className="text-center pb-10">
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  if (error) {
    return <Text>Failed to search</Text>;
  }

  if (scannerEnabled) {
    return (
      <CameraView
        style={{ flex: 1 }}
        facing={facing}
        onBarcodeScanned={(data) => {
          console.log(data.data);
          runSearch({ variables: { upc: data.data } });
          setscannerEnabled(false);
        }}
      >
        <Ionicons
          name="close"
          size={40}
          color="dimgray"
          className="absolute top-4 right-4"
        />
      </CameraView>
    );
  }

  const items = data?.search?.hints || [];

  return (
    <SafeAreaView className="p-4 gap-4">
      <View className="flex-row items-center gap-4">
        <TextInput
          value={search}
          onChangeText={setsearch}
          placeholder="Search..."
          className="bg-gray-200 rounded-full p-4 flex-1"
        />
        <Ionicons
          onPress={() => setscannerEnabled(true)}
          name="barcode-outline"
          size={32}
          color="dimgray"
        />
      </View>

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
