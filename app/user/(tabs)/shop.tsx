import HeaderBar from "@/components/HeaderBar";
import Assets from "@/constants/Assets";
import { Colors } from "@/constants/Colors";
import { Data } from "@/constants/Data";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { FlatList, StyleSheet, Text, TouchableHighlight, View } from "react-native";

export default function ShopScreen() {
  return (
    <>
      <HeaderBar />
      <FlatList
        style={style.container}
        data={Data}
        numColumns={2}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <Link asChild href={{ pathname: "/user/items/[id]", params: { id: item.id } }} style={{ width: "49%" }}>
            <TouchableHighlight underlayColor={Colors.main.inputBackground} style={{ margin: 2, borderRadius: 8 }}>
              <View style={style.listContainer}>
                <Image source={Assets.placeholder} style={style.imageData} />
                <View style={{ gap: 4, width: "100%", alignItems: "flex-start" }}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
                  <Text>Rp{item.price.toLocaleString("id-ID")}</Text>
                </View>
              </View>
            </TouchableHighlight>
          </Link>
        )}
      />
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main.background,
    paddingHorizontal: 8,
    width: "100%",
  },
  imageData: {
    borderRadius: 8,
    width: "100%",
    height: 180,
  },
  listContainer: {
    padding: 8,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
  },
});
