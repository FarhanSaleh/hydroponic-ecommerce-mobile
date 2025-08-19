import { Colors } from "@/constants/Colors";

import React from "react";
import {
  StyleSheet,
  TouchableHighlight,
  TouchableHighlightProps,
} from "react-native";

type ButtonVariant = "primary" | "icon" | "rounded";

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
 * - rounded: button yang agak bulat bordernya
 */
export default function Button({
  children,
  onPress,
  variant = "primary",
  style,
  disabled = false,
  underlayColor = Colors.main.primary200,
}: ButtonProps) {
  return (
    <TouchableHighlight
      underlayColor={underlayColor}
      activeOpacity={0.6}
      style={[
        styles.base,
        variant === "primary" && styles.primary,
        variant === "icon" && styles.icon,
        variant === "rounded" && styles.rounded,
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
    paddingVertical: 10,
    paddingHorizontal: 16,
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
  rounded: {
    borderRadius: 100,
  },
  disabled: {
    opacity: 0.5,
  },
});
