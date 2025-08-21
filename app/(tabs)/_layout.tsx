import HeaderBar from "@/components/HeaderBar";
import TabButton from "@/components/TabButton";
import { Colors } from "@/constants/Colors";
import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui";
import React from "react";
import { StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <Tabs>
      <HeaderBar />
      <TabSlot />
      <TabList style={style.tabContainer}>
        <TabTrigger name="home" href="/" asChild>
          <TabButton icon="home">Home</TabButton>
        </TabTrigger>
        <TabTrigger name="shop" href="/shop" asChild>
          <TabButton icon="leaf">Shop</TabButton>
        </TabTrigger>
        <TabTrigger name="profile" href="/profile" asChild>
          <TabButton icon="user">Profile</TabButton>
        </TabTrigger>
        <TabTrigger
          name="dynamic page"
          href="/items/[id]"
          style={{ display: "none" }}
        />
      </TabList>
    </Tabs>
  );
}

const style = StyleSheet.create({
  tabContainer: {
    backgroundColor: Colors.main.inputBackground,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
