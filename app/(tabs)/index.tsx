import { Text, View } from "react-native";

// components
import Header from "@/components/layout/Header/Header";

export default function HomeScreen() {
  return (
    <>
      <Header id="home" />
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl font-bold text-white">Hello</Text>
      </View>
    </>
  );
}
