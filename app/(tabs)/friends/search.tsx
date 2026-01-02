import { router } from "expo-router";
import { Pressable } from "react-native";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import Header from "@/components/layout/Header/Header";
import { IconSymbol } from "@/components/ui/icon-symbol";

export default function FriendsSearchScreen() {
  return (
    <>
      <Header
        id="friends-search"
        left={
          <Pressable
            onPress={() => router.back()}
            className="p-2"
          >
            <IconSymbol
              name="chevron.left"
              size={24}
              color="#F5F5F5"
            />
          </Pressable>
        }
      />
      <ThemedView className="flex-1 items-center justify-center bg-background pt-20">
        <ThemedText type="title" style={{ color: "#F5F5F5", marginBottom: 20 }}>
          Search Friends
        </ThemedText>
        <ThemedText style={{ color: "#B3B3B3", textAlign: "center", paddingHorizontal: 20 }}>
          友達検索機能はここに実装されます
        </ThemedText>
      </ThemedView>
    </>
  );
}

