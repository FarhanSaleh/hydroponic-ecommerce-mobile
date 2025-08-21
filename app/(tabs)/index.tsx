import Assets from "@/constants/Assets";
import { Colors } from "@/constants/Colors";
import { Data } from "@/constants/Data";
import { Image } from "expo-image";
import { Link } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={style.container}>
      <FlatList
        data={Data}
        keyExtractor={(item) => `${item.id}`}
        ListHeaderComponent={() => (
          <>
            <View style={style.imageContainer}>
              <Image source={Assets.home} style={style.image} />
              <View style={style.imageTitleContainer}>
                <Text
                  style={[
                    style.imageTitle,
                    { fontSize: 32, fontWeight: "bold" },
                  ]}
                >
                  Selamat Datang
                </Text>
                <Text style={[style.imageTitle]}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore, perspiciatis.
                </Text>
              </View>
            </View>
            <Text style={style.listHeading}>Sayuran Terbaru</Text>
          </>
        )}
        renderItem={({ item }) => (
          <Link
            asChild
            href={{ pathname: "/items/[id]", params: { id: item.id } }}
          >
            <TouchableHighlight underlayColor={Colors.main.inputBackground}>
              <View style={style.listContainer}>
                <Image source={Assets.placeholder} style={style.imageData} />
                <View style={{ gap: 4 }}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    {item.name}
                  </Text>
                  <Text>Rp{item.price.toLocaleString("id-ID")}</Text>
                </View>
              </View>
            </TouchableHighlight>
          </Link>
        )}
      />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main.background,
  },
  imageContainer: {
    height: 400,
    position: "relative",
  },
  bodyContainer: {
    paddingHorizontal: 16,
  },
  imageTitleContainer: {
    position: "absolute",
    bottom: 0,
    gap: 10,
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  imageTitle: {
    color: Colors.main.background,
  },
  image: {
    flex: 1,
  },
  imageData: {
    borderRadius: 8,
    width: 70,
    height: 70,
  },
  listHeading: {
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 12,
    fontSize: 22,
    fontWeight: "bold",
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
});
