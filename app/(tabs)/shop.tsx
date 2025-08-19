import { Colors } from "@/constants/Colors";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ShopScreen() {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <Text>Hello World: Shop</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main.background,
  },
});
