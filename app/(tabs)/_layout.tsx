import { Tabs } from "expo-router";
import React from "react";

import { CustomTabButton } from "@/components/custom-tab-button";
import { IconSymbol } from "@/components/ui/icon-symbol";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#535353",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#000000",
          borderTopWidth: 1,
          borderTopColor: "#1E1E1E",
          height: 100,
          paddingBottom: 22,
          paddingTop: 0,
        },
        tabBarItemStyle: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <IconSymbol
              size={30}
              name="house.fill"
              color={focused ? "#FFFFFF" : "#535353"}
              weight={focused ? "bold" : "regular"}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabButton {...props} tabName="index" />
          ),
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          title: "Friends",
          tabBarIcon: ({ focused }) => (
            <IconSymbol
              size={30}
              name={focused ? "person.2.fill" : "person.2"}
              color={focused ? "#FFFFFF" : "#535353"}
              weight={focused ? "bold" : "regular"}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabButton {...props} tabName="friends" />
          ),
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          title: "Feed",
          tabBarIcon: ({ focused }) => (
            <IconSymbol
              size={30}
              name={focused ? "rectangle.stack.fill" : "rectangle.stack"}
              color={focused ? "#FFFFFF" : "#535353"}
              weight={focused ? "bold" : "regular"}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabButton {...props} isCenter tabName="feed" />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          tabBarIcon: ({ focused }) => (
            <IconSymbol
              size={30}
              name={focused ? "map.fill" : "map"}
              color={focused ? "#FFFFFF" : "#535353"}
              weight={focused ? "bold" : "regular"}
            />
          ),
          tabBarButton: (props) => <CustomTabButton {...props} tabName="map" />,
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "Setting",
          tabBarIcon: ({ focused }) => (
            <IconSymbol
              size={30}
              name={focused ? "gearshape.fill" : "gearshape"}
              color={focused ? "#FFFFFF" : "#535353"}
              weight={focused ? "bold" : "regular"}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabButton {...props} tabName="setting" />
          ),
        }}
      />
    </Tabs>
  );
}
