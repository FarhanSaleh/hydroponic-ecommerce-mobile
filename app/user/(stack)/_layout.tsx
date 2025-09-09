import { Stack } from "expo-router";
import React from "react";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen name="items/[id]" options={{ title: "" }} />
      <Stack.Screen name="orders/index" options={{ title: "Daftar Pesanan" }} />
      <Stack.Screen name="checkout/index" options={{ title: "Checkout" }} />
      <Stack.Screen name="payment/index" options={{ title: "Pembayaran" }} />
    </Stack>
  );
}
