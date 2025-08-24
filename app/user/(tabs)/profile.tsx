import Assets from "@/constants/Assets";
import { Colors } from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.main.background }}>
      <View style={style.container}>
        <Text style={style.text}>Profile</Text>
      </View>
      <ScrollView>
        <View style={{ alignItems: "center", gap: 16, margin: 32 }}>
          <View>
            <Image source={Assets.profile} style={{ width: 150, height: 150, borderRadius: 75 }} />
          </View>
          <View style={{ gap: 4 }}>
            <Text style={{ fontWeight: "bold", textAlign: "center", fontSize: 24 }}>John Doe</Text>
            <Text style={{ textAlign: "center", color: Colors.main.accent }}>johndoe@gmail.com</Text>
          </View>
        </View>

        {/* TODO: Change Path to the real screen */}
        <Link asChild href={{ pathname: "/login" }}>
          <TouchableHighlight underlayColor={Colors.main.inputBackground}>
            <View style={style.listContainer}>
              <View style={style.icon}>
                <FontAwesome name="user" size={24} />
              </View>
              <View style={{ gap: 4 }}>
                <Text style={{ fontSize: 18 }}>Personal Information</Text>
              </View>
            </View>
          </TouchableHighlight>
        </Link>
        <Link asChild href={{ pathname: "/login" }}>
          <TouchableHighlight underlayColor={Colors.main.inputBackground}>
            <View style={style.listContainer}>
              <View style={style.icon}>
                <FontAwesome name="shopping-bag" size={24} />
              </View>
              <View style={{ gap: 4 }}>
                <Text style={{ fontSize: 18 }}>Order History</Text>
              </View>
            </View>
          </TouchableHighlight>
        </Link>
        <Link asChild href={{ pathname: "/login" }}>
          <TouchableHighlight underlayColor={Colors.main.inputBackground}>
            <View style={style.listContainer}>
              <View style={style.icon}>
                <FontAwesome name="dollar" size={24} />
              </View>
              <View style={{ gap: 4 }}>
                <Text style={{ fontSize: 18 }}>My Store</Text>
              </View>
            </View>
          </TouchableHighlight>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomColor: Colors.main.inputBackground,
    borderBottomWidth: 1,
  },
  text: { fontSize: 18, fontWeight: "bold", textAlign: "center" },
  listContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  icon: {
    display: "flex",
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    backgroundColor: Colors.main.primary200,
    borderRadius: 12,
  },
});
