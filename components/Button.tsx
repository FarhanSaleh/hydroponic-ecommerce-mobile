import { Colors } from "@/constants/Colors";

import React from "react";
import {
  StyleSheet,
  TouchableHighlight,
  TouchableHighlightProps,
} from "react-native";

type ButtonVariant = "primary" | "icon";

interface ButtonProps extends TouchableHighlightProps {
  variant?: ButtonVariant;
}

/**
 * Button Component
 *
 * Komponen tombol serbaguna untuk aplikasi React Native/Expo, mendukung beberapa variant tampilan.
 *
 * Props:
 * - title: string - Teks yang ditampilkan pada tombol.
 * - onPress: () => void - Fungsi yang dipanggil saat tombol ditekan.
 * - variant: "primary" | "icon" - Jenis tampilan tombol. Default: "primary".
 * - style: ViewStyle - Style tambahan untuk tombol.
 * - disabled: boolean - Jika true, tombol tidak bisa ditekan dan tampil redup. Default: false.
 *
 * Variant:
 * - primary: untuk penggunaan tombol text.
 * - icon: untuk penggunaan tombol icon
 *
 */
export default function Button({
  children,
  onPress,
  variant = "primary",
  style,
  disabled = false,
}: ButtonProps) {
  return (
    <TouchableHighlight
      underlayColor={Colors.main.primary200}
      activeOpacity={0.6}
      style={[
        styles.base,
        variant === "primary" && styles.primary,
        variant === "icon" && styles.icon,
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      {children}
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  base: {
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  primary: {
    backgroundColor: Colors.main.primary,
  },
  icon: {
    backgroundColor: "transparent",
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: Colors.main.primary,
  },
  disabled: {
    opacity: 0.5,
  },
});
