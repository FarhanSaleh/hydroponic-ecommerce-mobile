import Badge from "@/components/Badge";
import Assets from "@/constants/Assets";
import { Colors } from "@/constants/Colors";
import { DataOrder, DummyDataOrder } from "@/constants/Data";
import { Image } from "expo-image";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface OrderCardProps {
  item: DummyDataOrder;
  onPress?: () => void;
}

export default function OrdersScreen() {
  return (
    <SafeAreaView style={style.container}>
      <FlatList
        data={DataOrder}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        ListHeaderComponent={() => (
          <Text style={style.title}>Daftar Pesanan</Text>
        )}
        renderItem={({ item }) => (
          <OrderCard item={item} onPress={() => console.log(item.status)} />
        )}
      />
    </SafeAreaView>
  );
}

function OrderCard({ item, onPress }: OrderCardProps) {
  return (
    <TouchableHighlight
      style={style.orderCard}
      underlayColor={Colors.main.background}
      onPress={onPress}
    >
      <View>
        <Badge
          style={{ alignSelf: "flex-end", marginBottom: 2 }}
          variant={item.status}
        >
          {item.status}
        </Badge>
        <View style={style.bodyContainer}>
          <Image source={Assets.placeholder} style={style.image} />
          <Text style={style.item}>{item.order_detail.item.name}</Text>
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <Text style={style.text}>x{item.order_detail.amount}</Text>
            <Text style={style.text}>
              Rp{item.order_detail.price_at_order.toLocaleString("id-ID")}
            </Text>
          </View>
        </View>
        <View style={style.footContainer}>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "flex-end",
            }}
          >
            <Text style={[style.text, { fontWeight: "bold" }]}>Total: </Text>
            <Text style={style.text}>
              Rp{item.total_price.toLocaleString("id-ID")}
            </Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main.background,
    paddingHorizontal: 16,
  },
  bodyContainer: {
    flexDirection: "row",
    gap: 16,
  },
  footContainer: {
    marginTop: 8,
  },
  orderCard: {
    backgroundColor: Colors.main.inputBackground,
    borderRadius: 8,
    marginBottom: 8,
    padding: 8,
  },
  image: {
    height: 80,
    width: 80,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 12,
  },
  item: {
    fontSize: 16,
    flex: 1,
    fontWeight: "500",
  },
  text: {
    fontSize: 12,
  },
});
