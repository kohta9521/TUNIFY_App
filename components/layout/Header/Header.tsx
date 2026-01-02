import { ThemedView } from "@/components/themed-view";
import { Image } from "expo-image";
import { View } from "react-native";

// props
export type HeaderProps = {
  id: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
};

export default function Header({ id, left, right }: HeaderProps) {
  return (
    <ThemedView
      key={id}
      className="absolute top-0 left-0 right-0 z-50 bg-background border-b border-[#1E1E1E] pt-14 pb-2"
    >
      <View className="flex-row items-center justify-between px-4">
        <View className="flex-1">{left}</View>
        <View className="items-center justify-center">
          <Image
            source={require("@/assets/service/textlogo_white.png")}
            style={{ width: 100, height: 40 }}
            contentFit="contain"
          />
        </View>
        <View className="flex-1 items-end">{right}</View>
      </View>
    </ThemedView>
  );
}
