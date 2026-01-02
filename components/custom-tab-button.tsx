import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { PlatformPressable } from "@react-navigation/elements";
import * as Haptics from "expo-haptics";
import { usePathname, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

type CustomTabButtonProps = BottomTabBarButtonProps & {
  isCenter?: boolean;
  tabName?: string;
};

export function CustomTabButton({
  isCenter = false,
  tabName,
  ...props
}: CustomTabButtonProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [pressed, setPressed] = useState(false);

  const handlePress = (ev: any) => {
    // タブが既にアクティブな場合、そのタブのトップページに戻る
    if (tabName && pathname) {
      const isActive = pathname.includes(`/${tabName}`);
      const isSubPage =
        pathname.includes(`/${tabName}/`) && !pathname.endsWith(`/${tabName}`);

      if (isActive && isSubPage) {
        // 既にそのタブがアクティブで、サブページにいる場合、トップに戻る
        ev.preventDefault();
        // 型安全な方法でナビゲーション
        const routeMap: Record<string, string> = {
          index: "/(tabs)",
          friends: "/(tabs)/friends",
          feed: "/(tabs)/feed",
          map: "/(tabs)/map",
          setting: "/(tabs)/setting",
        };
        const route = routeMap[tabName];
        if (route) {
          router.replace(route as any);
        }
        return;
      }
    }

    // 通常のタブ切り替え処理
    props.onPress?.(ev);
  };

  const buttonStyle: (ViewStyle | false | undefined)[] = [
    styles.tabButton,
    props.style as ViewStyle,
    isCenter && styles.centerButton,
    pressed && isCenter && styles.centerButtonPressed,
  ].filter(
    (style): style is ViewStyle => style !== false && style !== undefined
  );

  return (
    <PlatformPressable
      {...props}
      onPress={handlePress}
      style={buttonStyle}
      onPressIn={(ev) => {
        setPressed(true);
        if (process.env.EXPO_OS === "ios") {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        props.onPressIn?.(ev);
      }}
      onPressOut={(ev) => {
        setPressed(false);
        props.onPressOut?.(ev);
      }}
    >
      {isCenter && <View style={styles.centerButtonBackground} />}
      {props.children}
    </PlatformPressable>
  );
}

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centerButton: {
    top: -25,
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: "#000000",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 10,
    borderWidth: 2,
    borderColor: "#1E1E1E",
    flex: 0,
  },
  centerButtonBackground: {
    position: "absolute",
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: "#000000",
  },
  centerButtonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.95 }],
  },
});
