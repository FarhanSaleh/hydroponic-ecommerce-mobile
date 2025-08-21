import { Colors } from "@/constants/Colors";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

interface Props {
  onValueChange: (newValue: number) => void;
  value: number;
  style?: ViewStyle;
}

export function QuantityStepper({ onValueChange, value, style }: Props) {
  const handleIncrement = () => {
    onValueChange(value + 1);
  };

  const handleDecrement = () => {
    if (value > 1) {
      onValueChange(value - 1);
    }
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={handleDecrement} style={styles.button}>
        <Text style={styles.buttonText}>−</Text>
      </TouchableOpacity>

      <Text style={styles.countText}>{value}</Text>

      <TouchableOpacity onPress={handleIncrement} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

// StyleSheet untuk mengatur tampilan
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.main.inputBackground,
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: "flex-start", // Agar container tidak memenuhi lebar layar
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  countText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginHorizontal: 16,
    minWidth: 20, // Memberi lebar minimum agar layout stabil
    textAlign: "center",
  },
});


