import { Colors } from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { TabTriggerSlotProps } from "expo-router/ui";
import React, { ComponentProps } from "react";
import { Pressable, Text } from "react-native";

type Icon = ComponentProps<typeof FontAwesome>["name"];

export type TabButtonProps = TabTriggerSlotProps & {
  icon?: Icon;
};

export default function TabButton({
  icon,
  children,
  isFocused,
  ...props
}: TabButtonProps) {
  return (
    <Pressable
      {...props}
      style={[
        {
          gap: 4,
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 16,
          alignItems: "center",
        },
        isFocused ? { backgroundColor: Colors.main.secondary100 } : undefined,
      ]}
    >
      <FontAwesome
        name={icon}
        style={[
          { fontSize: 24, color: Colors.main.accent },
          isFocused ? { color: Colors.main.secondary } : undefined,
        ]}
      />
      <Text
        style={[
          { fontSize: 16, color: Colors.main.accent },
          isFocused ? { color: Colors.main.secondary } : undefined,
        ]}
      >
        {children}
      </Text>
    </Pressable>
  );
}
