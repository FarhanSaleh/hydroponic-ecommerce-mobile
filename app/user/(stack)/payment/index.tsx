import Button from "@/components/Button";
import { Colors } from "@/constants/Colors";
import { useHandleImage } from "@/hooks/useFile";
import { toUploadImage } from "@/lib/utils";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Clipboard from "expo-clipboard";
import { Image } from "expo-image";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function PaymentScreen() {
  const copyToClipboard = async (text: string) => {
    await Clipboard.setStringAsync(text);
  };

  const { handlePickImage, image, resetImage } = useHandleImage();

  const handleSubmit = () => {
    const formData = new FormData();
    if (image?.assets && image.assets.length > 0) {
      const imageAsset = image.assets[0];
      const uploadImage = toUploadImage(imageAsset);

      formData.append("payment_proof", uploadImage as any);
    }
    console.log(formData.get("payment_proof"));
    resetImage();
  };

  return (
    <ScrollView style={{ backgroundColor: Colors.main.background }}>
      <View style={style.container}>
        <View style={{ gap: 4 }}>
          <Text style={style.header}>Detail Pembayaran</Text>
          <Text>
            Silahkan transfer ke nomor rekening di bawah dan upload bukti
            pembayaran
          </Text>
        </View>
        <View style={{ gap: 8 }}>
          <Text style={{ fontWeight: "500" }}>Nomor Rekening</Text>
          <Pressable
            style={style.clipboardCopy}
            onPress={() => copyToClipboard("4100 2930 9162 7846")}
          >
            <Text>4100 2930 9162 7846</Text>
            <Ionicons name="copy-outline" size={24} color="black" />
          </Pressable>
        </View>
        <View style={{ gap: 8 }}>
          <Text style={{ fontWeight: "500" }}>Bukti Pembayaran</Text>
          <View style={style.imagePicker}>
            <View style={{ alignItems: "center", gap: 12 }}>
              {image?.assets && image.assets.length > 0 ? (
                <Image
                  source={{ uri: image.assets[0].uri }}
                  style={{
                    width: 300,
                    aspectRatio: image.assets[0].width / image.assets[0].height,
                    marginTop: 10,
                  }}
                />
              ) : (
                <>
                  <View style={style.imageIcon}>
                    <Ionicons
                      name="image-outline"
                      size={24}
                      color={Colors.main.accent}
                    />
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text style={{ fontWeight: "500" }}>
                      Klik untuk upload bukti pembayaran
                    </Text>
                    <Text style={{ fontSize: 12 }}>
                      png, jpg, jpeg maksimal 5mb
                    </Text>
                  </View>
                </>
              )}
              <Button onPress={handlePickImage}>
                <Text style={{ fontWeight: "bold" }}>Pilih Gambar</Text>
              </Button>
            </View>
          </View>
        </View>

        <Button onPress={handleSubmit}>
          <Text style={{ fontWeight: "bold" }}>Kirim</Text>
        </Button>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
  },
  clipboardCopy: {
    borderColor: Colors.main.secondary100,
    backgroundColor: Colors.main.inputBackground,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imagePicker: {
    borderColor: Colors.main.accent,
    backgroundColor: Colors.main.inputBackground,
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: 4,
    padding: 24,
    alignItems: "center",
  },
  imageIcon: {
    padding: 16,
    backgroundColor: Colors.main.success,
    borderRadius: "100%",
  },
});
