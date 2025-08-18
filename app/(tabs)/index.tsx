import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <Text>Hello World: Home</Text>
        <View>
          <Link href={"/login"}>
            <Text>To Login</Text>
          </Link>
        </View>
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
