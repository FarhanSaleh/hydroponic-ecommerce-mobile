import TabButton from "@/components/TabButton";
import { Colors } from "@/constants/Colors";
import { TabList, Tabs, TabSlot, TabTrigger } from "expo-router/ui";
import React from "react";
import { StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <Tabs>
      <TabSlot />
      <TabList style={style.tabContainer}>
        <TabTrigger name="product" href="/admin" asChild>
          <TabButton icon="leaf">Product</TabButton>
        </TabTrigger>
        <TabTrigger name="orders" href="/admin/orders" asChild>
          <TabButton icon="dropbox">Orders</TabButton>
        </TabTrigger>
        <TabTrigger name="profile" href="/admin/profile" asChild>
          <TabButton icon="user">Profile</TabButton>
        </TabTrigger>
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
