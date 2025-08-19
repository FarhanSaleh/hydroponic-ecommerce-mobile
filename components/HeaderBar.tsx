import Button from "@/components/Button";
import { Colors } from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HeaderBar() {
  const [showInput, setShowInput] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <SafeAreaView edges={["top"]} style={style.container}>
      {!showInput && (
        <View style={style.title}>
          <FontAwesome name="leaf" style={style.icon} />
          <Text style={style.text}>HydroFresh</Text>
        </View>
      )}
      <View style={[style.buttonContainer, showInput && { width: "100%" }]}>
        {!showInput && (
          <Button
            variant="rounded"
            style={style.button}
            underlayColor={Colors.main.secondary100}
          >
            <View style={style.buttonContent}>
              <FontAwesome name="dropbox" style={style.icon} />
              <Text style={{ color: Colors.main.accent }}>Orders</Text>
            </View>
          </Button>
        )}
        <Button
          variant="rounded"
          style={style.button}
          onPress={() => setShowInput(!showInput)}
          underlayColor={Colors.main.secondary100}
        >
          <View style={style.buttonContent}>
            <FontAwesome name="search" style={style.icon} />
          </View>
        </Button>
        {showInput && (
          <TextInput
            style={style.input}
            onChangeText={setSearchText}
            value={searchText}
            placeholder="Cari sesuatu..."
            autoFocus
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.main.background,
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  icon: { fontSize: 16, color: Colors.main.accent },
  text: { fontSize: 16 },
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
  },
  button: {
    width: "auto",
    backgroundColor: Colors.main.inputBackground,
    borderColor: Colors.main.accent,
    borderWidth: 1,
  },
  buttonContent: { flexDirection: "row", alignItems: "center", gap: 10 },
  input: {
    borderColor: Colors.main.accent,
    borderWidth: 1,
    borderRadius: 16,
    padding: 10,
    flex: 1,
  },
});
