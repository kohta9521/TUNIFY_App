import { ThemedText } from "@/components/themed-text";
import { View } from "react-native";

export default function SettingScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <ThemedText type="title" style={{ color: "#F5F5F5" }}>
        Setting
      </ThemedText>
    </View>
  );
}
