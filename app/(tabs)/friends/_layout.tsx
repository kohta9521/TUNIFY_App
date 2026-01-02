import { Stack } from "expo-router";

export default function FriendsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Friends",
        }}
      />
      <Stack.Screen
        name="qr"
        options={{
          title: "QR Code",
        }}
      />
      <Stack.Screen
        name="search"
        options={{
          title: "Search",
        }}
      />
    </Stack>
  );
}
