import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";

type BadgeVariant = "success" | "process" | "cancel" | "ship";

interface Props {
  children: string;
  style?: ViewStyle;
  variant?: BadgeVariant;
}

export default function Badge({ children, style, variant = "process" }: Props) {
  return (
    <View
      style={[
        styles.base,
        variant === "success" && styles.success,
        variant === "process" && styles.warning,
        variant === "cancel" && styles.danger,
        variant === "ship" && styles.info,
        style,
      ]}
    >
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 4,
    backgroundColor: Colors.main.background,
  },
  success: {
    backgroundColor: Colors.main.success,
  },
  warning: {
    backgroundColor: Colors.main.warning,
  },
  danger: {
    backgroundColor: Colors.main.danger,
  },
  info: {
    backgroundColor: Colors.main.info,
  },
  text: {
    fontSize: 12,
  },
});
