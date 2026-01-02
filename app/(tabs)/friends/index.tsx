import { ThemedView } from "@/components/themed-view";
import { router } from "expo-router";
import { Pressable, ScrollView } from "react-native";

// components
import Header from "@/components/layout/Header/Header";
import { UserCard } from "@/components/ui/Card/UserCard";
import { IconSymbol } from "@/components/ui/icon-symbol";

// ダミーデータ
const DUMMY_USERS = [
  {
    id: "1",
    name: "Kohta9521",
    profileImage: "@/assets/service/dummy/profile.png",
    isActive: true,
    lastLogin: "11:30AM",
    topTrack: {
      title: "Bass Drops & Starbursts",
      artist: "Budiarti Reo",
      coverImage:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop",
      likes: 1247,
      saves: 89,
    },
    playlists: [
      {
        id: "p1",
        title: "Bass Drops & Starbursts",
        artist: "Budiarti Reo",
        coverImage:
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop",
        likes: 3421,
        saves: 256,
      },
      {
        id: "p2",
        title: "Euphoria 808",
        artist: "Samantha Will",
        coverImage:
          "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=200&h=200&fit=crop",
        likes: 2890,
        saves: 198,
      },
      {
        id: "p3",
        title: "Neon Skyline",
        artist: "Alexandra Oel",
        coverImage:
          "https://images.unsplash.com/photo-1516280440619-27c93527e45a?w=200&h=200&fit=crop",
        likes: 4567,
        saves: 312,
      },
    ],
  },
  {
    id: "2",
    name: "TUNIFY User",
    profileImage: "@/assets/service/dummy/profile.png",
    isActive: false,
    lastLogin: "2:15PM",
    topTrack: {
      title: "Electric Love Affair",
      artist: "Mikasa Jeanete",
      coverImage:
        "https://images.unsplash.com/photo-1516280440619-27c93527e45a?w=200&h=200&fit=crop",
      likes: 892,
      saves: 67,
    },
    playlists: [
      {
        id: "p4",
        title: "Electric Love Affair",
        artist: "Mikasa Jeanete",
        coverImage:
          "https://images.unsplash.com/photo-1516280440619-27c93527e45a?w=200&h=200&fit=crop",
        likes: 2134,
        saves: 145,
      },
      {
        id: "p5",
        title: "Synthwave Dreams",
        artist: "Norman Perez",
        coverImage:
          "https://images.unsplash.com/photo-1514320291840-2ea9bf2a9ae?w=200&h=200&fit=crop",
        likes: 1876,
        saves: 123,
      },
    ],
  },
  {
    id: "3",
    name: "Music Lover",
    profileImage: "@/assets/service/dummy/profile.png",
    isActive: true,
    lastLogin: "Now",
    topTrack: {
      title: "Neon Skyline",
      artist: "Alexandra Oel",
      coverImage:
        "https://images.unsplash.com/photo-1516280440619-27c93527e45a?w=200&h=200&fit=crop",
      likes: 3456,
      saves: 234,
    },
    playlists: [
      {
        id: "p6",
        title: "Bass Drops & Starbursts",
        artist: "Budiarti Reo",
        coverImage:
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop",
        likes: 5234,
        saves: 389,
      },
      {
        id: "p7",
        title: "Euphoria 808",
        artist: "Samantha Will",
        coverImage:
          "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=200&h=200&fit=crop",
        likes: 4123,
        saves: 298,
      },
      {
        id: "p8",
        title: "Synthwave Dreams",
        artist: "Norman Perez",
        coverImage:
          "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=200&h=200&fit=crop",
        likes: 3789,
        saves: 267,
      },
    ],
  },
];

export default function FriendsScreen() {
  const handleProfilePress = (userId: string) => {
    // プロフィールページへの遷移
    console.log("Navigate to profile:", userId);
    // router.push(`/(tabs)/profile/${userId}`);
  };

  return (
    <>
      <Header
        id="friends"
        left={
          <Pressable
            onPress={() => router.push("/(tabs)/friends/qr")}
            className="p-2 ml-2"
          >
            <IconSymbol name="qrcode" size={24} color="#F5F5F5" />
          </Pressable>
        }
        right={
          <Pressable
            onPress={() => router.push("/(tabs)/friends/search")}
            className="p-2 mr-2"
          >
            <IconSymbol name="magnifyingglass" size={24} color="#F5F5F5" />
          </Pressable>
        }
      />
      <ThemedView className="flex-1 bg-black pt-36">
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ paddingHorizontal: 24, paddingVertical: 20 }}
          showsVerticalScrollIndicator={false}
        >
          {DUMMY_USERS.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onProfilePress={handleProfilePress}
            />
          ))}
        </ScrollView>
      </ThemedView>
    </>
  );
}
