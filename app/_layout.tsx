import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";

// css
import "@/styles/global.css";

import { LoadingScreen } from "@/components/screen/LoadingScreen";
import { DarkNeonPinkColors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "(tabs)",
};

const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: DarkNeonPinkColors.accent,
    background: DarkNeonPinkColors.background,
    card: DarkNeonPinkColors.surface,
    text: DarkNeonPinkColors.text,
    border: DarkNeonPinkColors.inactive,
    notification: DarkNeonPinkColors.accent,
  },
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider value={customDarkTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="light" />
      {isLoading && <LoadingScreen />}
    </ThemeProvider>
  );
}
