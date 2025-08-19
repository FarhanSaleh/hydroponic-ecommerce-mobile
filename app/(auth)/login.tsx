import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <Text>Hello World: Login</Text>
        <Link href={"/"}>
          <Text>To User Home</Text>
        </Link>
        <Link href={"/admin"}>
          <Text>To Admin Home</Text>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8d8d8dff",
  },
});
