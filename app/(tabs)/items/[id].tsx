import Button from "@/components/Button";
import { QuantityStepper } from "@/components/QuantityStepper";
import Assets from "@/constants/Assets";
import { Colors } from "@/constants/Colors";
import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function DetailItemScreen() {
  const { id } = useLocalSearchParams();
  const [quantity, setQuantity] = useState(1);

  return (
    <ScrollView style={style.container}>
      <Image source={Assets.placeholder} style={style.image} />
      <View style={style.bodyContainer}>
        <View style={{ gap: 4 }}>
          <Text style={style.title}>Produk {id}</Text>
          <Text style={{ fontSize: 16 }}>Stock: 10</Text>
        </View>
        <Text style={{ fontSize: 16 }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, eaque!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, quo.
        </Text>
        <Text style={{ fontSize: 16, color: Colors.main.accent }}>
          Rp. 10.000
        </Text>
        <QuantityStepper
          value={quantity}
          onValueChange={setQuantity}
          style={{ alignSelf: "center" }}
        />
        <Button
          variant="rounded"
          style={{ backgroundColor: Colors.main.primary }}
          onPress={() => console.log("WOW", quantity)}
        >
          <Text style={{ fontWeight: "bold" }}>Buat Pesanan</Text>
        </Button>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main.background,
  },
  bodyContainer: {
    paddingHorizontal: 16,
    gap: 24,
    marginVertical: 24,
  },
  image: {
    width: "auto",
    height: 320,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
