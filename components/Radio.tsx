import { Colors } from "@/constants/Colors";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export interface RadioOption {
  label: string;
  value: string;
}

interface Props {
  options: RadioOption;
  selectedValue: string;
  setSelected: () => void;
}

export default function Radio({ options, selectedValue, setSelected }: Props) {
  return (
    <Pressable
      style={{
        borderColor: Colors.main.accent,
        borderWidth: 1,
        borderRadius: 12,
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      onPress={() => setSelected()}
    >
      <Text>{options.label}</Text>
      <View style={style.radioCircle}>
        {selectedValue === options.value && (
          <View style={style.radioDot}></View>
        )}
      </View>
    </Pressable>
  );
}

const style = StyleSheet.create({
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.main.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  radioDot: {
    height: 10,
    width: 10,
    backgroundColor: Colors.main.primary,
    borderRadius: 12,
  },
});
