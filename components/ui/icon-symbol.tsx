// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { SymbolViewProps, SymbolWeight } from "expo-symbols";
import { ComponentProps } from "react";
import { OpaqueColorValue, type StyleProp, type TextStyle } from "react-native";

type IconMapping = Record<
  SymbolViewProps["name"],
  ComponentProps<typeof MaterialIcons>["name"]
>;
type IconSymbolName = keyof typeof MAPPING;

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
  "house.fill": "home",
  "paperplane.fill": "send",
  "chevron.left.forwardslash.chevron.right": "code",
  "chevron.right": "chevron-right",
  magnifyingglass: "search",
  "play.tv.fill": "live-tv",
  bell: "notifications",
  person: "person",
  house: "home",
  "magnifyingglass.fill": "search",
  "play.tv": "live-tv",
  "bell.fill": "notifications",
  "person.fill": "person",
  "person.2.fill": "people",
  "person.2": "people",
  "square.grid.2x2.fill": "grid-view",
  "square.grid.2x2": "grid-view",
  "photo.fill": "photo",
  photo: "photo",
  "rectangle.stack.fill": "view-agenda",
  "rectangle.stack": "view-agenda",
  "map.fill": "map",
  map: "map",
  "gearshape.fill": "settings",
  gearshape: "settings",
  qrcode: "qr-code",
  "qrcode.fill": "qr-code",
  "chevron.left": "chevron-left",
  "clock.fill": "schedule",
  "chevron.up": "keyboard-arrow-up",
  "chevron.down": "keyboard-arrow-down",
  "ellipsis.circle": "more-vert",
  "heart.fill": "favorite",
  "bookmark.fill": "bookmark",
} as IconMapping;

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  weight,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  weight?: SymbolWeight;
}) {
  // Android/Webではweightを無視してMaterial Iconsを使用
  return (
    <MaterialIcons
      color={color}
      size={size}
      name={MAPPING[name]}
      style={style}
    />
  );
}
