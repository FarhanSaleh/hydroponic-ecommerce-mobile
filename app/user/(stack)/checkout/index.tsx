import Button from "@/components/Button";
import Radio, { RadioOption } from "@/components/Radio";
import Assets from "@/constants/Assets";
import { Colors } from "@/constants/Colors";
import { Image } from "expo-image";
import { Formik } from "formik";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";

export default function CheckoutScreen() {
  const radioOption: RadioOption[] = [
    { label: "Bayar Ditempat", value: "cod" },
    { label: "Transfer Bank", value: "transfer" },
  ];

  const initialValues = {
    address: "",
    payment_method: "",
  };

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleSubmit, handleChange, values, handleBlur }) => (
          <>
            <View style={style.container}>
              <View style={{ gap: 8 }}>
                <Text style={{ fontSize: 16 }}>Informasi Alamat</Text>
                <TextInput
                  style={style.input}
                  placeholder="Alamat"
                  value={values.address}
                  onChangeText={handleChange("address")}
                  onBlur={handleBlur("address")}
                />
              </View>
              <View>
                <TouchableHighlight
                  underlayColor={Colors.main.inputBackground}
                  onPress={() => console.log("as")}
                >
                  <View style={style.itemContainer}>
                    <Image
                      source={Assets.placeholder}
                      style={style.imageData}
                    />
                    <View
                      style={{
                        justifyContent: "space-between",
                        flex: 1,
                      }}
                    >
                      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                        Sayur
                      </Text>
                      <View style={style.price}>
                        <Text>Rp 1000</Text>
                        <Text style={style.quantityLabel}>x2</Text>
                      </View>
                    </View>
                  </View>
                </TouchableHighlight>
              </View>
              <View>
                <View style={{ gap: 8 }}>
                  <Text style={{ fontSize: 16 }}>Metode Pembayaran</Text>
                  {radioOption.map((value, index) => (
                    <Radio
                      key={index}
                      options={value}
                      selectedValue={values.payment_method}
                      setSelected={() =>
                        handleChange("payment_method")(value.value)
                      }
                    />
                  ))}
                </View>
              </View>
            </View>
            <View style={style.footerContainer}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={style.totalPrice}>Total Harga:</Text>
                <Text style={style.totalPrice}>Rp1000</Text>
              </View>
              <Button
                variant="rounded"
                style={{ backgroundColor: Colors.main.primary }}
                onPress={() => handleSubmit()}
              >
                <Text style={{ fontWeight: "bold" }}>Pesanan Sekarang</Text>
              </Button>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main.background,
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 24,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    gap: 16,
  },
  footerContainer: {
    backgroundColor: Colors.main.background,
    position: "absolute",
    bottom: 12,
    width: "100%",
    gap: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  imageData: {
    borderRadius: 8,
    width: 80,
    height: 80,
  },
  quantityLabel: {
    backgroundColor: Colors.main.inputBackground,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
  },
  price: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    borderColor: Colors.main.accent,
    backgroundColor: Colors.main.inputBackground,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
  },
});
