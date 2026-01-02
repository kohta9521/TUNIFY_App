import { IconSymbol } from "@/components/ui/icon-symbol";
import { DarkNeonPinkColors } from "@/constants/theme";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Playlist {
  id: string;
  title: string;
  artist: string;
  coverImage: string;
  likes: number;
  saves: number;
}

interface User {
  id: string;
  name: string;
  profileImage: string;
  isActive: boolean;
  lastLogin: string;
  topTrack: {
    title: string;
    artist: string;
    coverImage: string;
    likes: number;
    saves: number;
  };
  playlists: Playlist[];
}

interface UserCardProps {
  user: User;
  onProfilePress?: (userId: string) => void;
}

export function UserCard({ user, onProfilePress }: UserCardProps) {
  const [isPlaylistExpanded, setIsPlaylistExpanded] = useState(false);

  return (
    <View className="mb-6">
      {/* メインカード */}
      <View className="relative" style={styles.cardContainer}>
        {/* グラデーション背景エフェクト */}
        <View
          className="absolute inset-0 rounded-[24px] opacity-30"
          style={{
            backgroundColor: user.isActive ? "#00FF00" : "#666666",
            opacity: 0.05,
          }}
        />

        <View
          className="bg-[#1A1A1A] rounded-[24px] p-6 relative overflow-hidden border border-white/10"
          style={styles.cardShadow}
        >
          {/* 左上：アクティブ表示 */}
          <View className="absolute top-6 left-6 flex-row items-center gap-2.5 z-10">
            <View className="relative">
              <View
                className={`w-3 h-3 rounded-full ${
                  user.isActive ? "bg-green-500" : "bg-gray-500"
                }`}
                style={[
                  user.isActive && {
                    shadowColor: "#00FF00",
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 1,
                    shadowRadius: 8,
                  },
                ]}
              />
              {user.isActive && (
                <View
                  className="absolute inset-0 rounded-full bg-green-500"
                  style={{
                    opacity: 0.5,
                    transform: [{ scale: 1.8 }],
                  }}
                />
              )}
            </View>
            <Text className="text-white text-xs font-bold tracking-wide">
              {user.isActive ? "Now Playing" : "Offline"}
            </Text>
          </View>

          {/* 右上：最終ログイン時刻 + プロフィール遷移 */}
          <View className="absolute top-6 right-6 flex-row items-center gap-3 z-10">
            <View className="flex-row items-center gap-1.5 bg-black/30 rounded-full px-2.5 py-1">
              <IconSymbol name="clock.fill" size={10} color="#999999" />
              <Text className="text-[#999999] text-[10px] font-semibold">
                {user.lastLogin}
              </Text>
            </View>
            <Pressable
              onPress={() => onProfilePress?.(user.id)}
              className="p-2 bg-white/5 rounded-full active:bg-white/10"
            >
              <IconSymbol name="chevron.right" size={14} color="#F5F5F5" />
            </Pressable>
          </View>

          {/* メインコンテンツ */}
          <View className="mt-12">
            <View className="flex-row items-start gap-5">
              {/* プロフィール画像 */}
              <View className="relative">
                {user.isActive ? (
                  <LinearGradient
                    colors={["rgba(0, 255, 0, 0.4)", "rgba(0, 255, 0, 0.1)"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    className="rounded-2xl p-0.5"
                  >
                    <Image
                      source={require("@/assets/service/dummy/profile.png")}
                      className="w-28 h-28 rounded-2xl"
                      contentFit="cover"
                    />
                  </LinearGradient>
                ) : (
                  <View className="rounded-2xl p-0.5 bg-white/10">
                    <Image
                      source={require("@/assets/service/dummy/profile.png")}
                      className="w-28 h-28 rounded-2xl"
                      contentFit="cover"
                    />
                  </View>
                )}
                {user.isActive && (
                  <View className="absolute -bottom-1.5 -right-1.5 w-7 h-7 bg-green-500 rounded-full border-[3px] border-[#1A1A1A] shadow-lg" />
                )}
              </View>

              {/* 名前とベストトラック */}
              <View className="flex-1 pt-1">
                <Text className="text-white text-2xl font-extrabold mb-4 tracking-tight">
                  {user.name}
                </Text>

                {/* ベストトラック */}
                <View className="rounded-2xl p-4 border border-white/10 relative overflow-hidden">
                  <LinearGradient
                    colors={["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0.3)"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    className="absolute inset-0 rounded-2xl"
                  />
                  {/* グラデーションオーバーレイ */}
                  <LinearGradient
                    colors={[`${DarkNeonPinkColors.accent}33`, "transparent"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    className="absolute inset-0 rounded-2xl opacity-20"
                  />
                  <View className="flex-row items-center gap-4 relative z-10">
                    <View className="relative">
                      <Image
                        source={{ uri: user.topTrack.coverImage }}
                        className="w-16 h-16 rounded-xl"
                        contentFit="cover"
                      />
                      <LinearGradient
                        colors={["transparent", "rgba(0, 0, 0, 0.3)"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        className="absolute inset-0 rounded-xl"
                      />
                    </View>
                    <View className="flex-1">
                      <Text
                        className="text-white text-base font-extrabold mb-1 tracking-tight"
                        numberOfLines={1}
                      >
                        {user.topTrack.title}
                      </Text>
                      <Text
                        className="text-[#B3B3B3] text-xs font-semibold mb-3"
                        numberOfLines={1}
                      >
                        {user.topTrack.artist}
                      </Text>
                      {/* いいね数・保存数 */}
                      <View className="flex-row items-center gap-5">
                        <View className="flex-row items-center gap-1.5 bg-black/40 rounded-full px-2.5 py-1">
                          <IconSymbol
                            name="heart.fill"
                            size={11}
                            color="#FF10F0"
                          />
                          <Text className="text-[#B3B3B3] text-[10px] font-bold">
                            {user.topTrack.likes.toLocaleString()}
                          </Text>
                        </View>
                        <View className="flex-row items-center gap-1.5 bg-black/40 rounded-full px-2.5 py-1">
                          <IconSymbol
                            name="bookmark.fill"
                            size={11}
                            color="#FF10F0"
                          />
                          <Text className="text-[#B3B3B3] text-[10px] font-bold">
                            {user.topTrack.saves.toLocaleString()}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* プレイリストを見るボタン */}
          <Pressable
            onPress={() => setIsPlaylistExpanded(!isPlaylistExpanded)}
            className="mt-6 rounded-2xl overflow-hidden"
            style={styles.buttonShadow}
          >
            <LinearGradient
              colors={[DarkNeonPinkColors.accent, "#FF00CC"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              className="py-4 px-6 flex-row items-center justify-between"
            >
              <Text className="text-black font-extrabold text-sm tracking-wide">
                プレイリストを見る
              </Text>
              <View className="bg-black/20 rounded-full p-1">
                <IconSymbol
                  name={isPlaylistExpanded ? "chevron.up" : "chevron.down"}
                  size={14}
                  color="#000000"
                />
              </View>
            </LinearGradient>
          </Pressable>
        </View>
      </View>

      {/* プレイリスト一覧（展開時） */}
      {isPlaylistExpanded && (
        <View className="mt-3">
          <View
            className="bg-[#1A1A1A] rounded-[24px] p-6 border border-white/10"
            style={styles.cardShadow}
          >
            {user.playlists.map((playlist, index) => (
              <Pressable
                key={playlist.id}
                className={`flex-row items-center gap-4 py-4 ${
                  index !== user.playlists.length - 1
                    ? "border-b border-white/5"
                    : ""
                }`}
                style={({ pressed }) => [pressed && { opacity: 0.7 }]}
              >
                <View className="relative">
                  <Image
                    source={{ uri: playlist.coverImage }}
                    className="w-[72px] h-[72px] rounded-2xl"
                    contentFit="cover"
                  />
                  <LinearGradient
                    colors={["transparent", "rgba(0, 0, 0, 0.4)"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    className="absolute inset-0 rounded-2xl"
                  />
                </View>
                <View className="flex-1">
                  <Text
                    className="text-white text-lg font-extrabold mb-1.5 tracking-tight"
                    numberOfLines={1}
                  >
                    {playlist.title}
                  </Text>
                  <Text
                    className="text-[#B3B3B3] text-xs font-semibold mb-3"
                    numberOfLines={1}
                  >
                    {playlist.artist}
                  </Text>
                  {/* いいね数・保存数 */}
                  <View className="flex-row items-center gap-5">
                    <View className="flex-row items-center gap-1.5 bg-black/40 rounded-full px-2.5 py-1">
                      <IconSymbol name="heart.fill" size={11} color="#FF10F0" />
                      <Text className="text-[#B3B3B3] text-[10px] font-bold">
                        {playlist.likes.toLocaleString()}
                      </Text>
                    </View>
                    <View className="flex-row items-center gap-1.5 bg-black/40 rounded-full px-2.5 py-1">
                      <IconSymbol
                        name="bookmark.fill"
                        size={11}
                        color="#FF10F0"
                      />
                      <Text className="text-[#B3B3B3] text-[10px] font-bold">
                        {playlist.saves.toLocaleString()}
                      </Text>
                    </View>
                  </View>
                </View>
                <Pressable className="p-2.5 bg-white/5 rounded-full active:bg-white/10">
                  <IconSymbol
                    name="ellipsis.circle"
                    size={18}
                    color="#999999"
                  />
                </Pressable>
              </Pressable>
            ))}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 20,
  },
  cardShadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.4,
    shadowRadius: 24,
    elevation: 15,
  },
  buttonShadow: {
    shadowColor: DarkNeonPinkColors.accent,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 8,
  },
});
