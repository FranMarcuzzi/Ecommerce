import { StyleSheet, Text, View } from "react-native";
import React from "react";

const OrderItem = ({ item }) => {
  const total = item.items.reduce(
    (acc, currentItem) => (acc += currentItem.quantity * currentItem.price),
    0
  );

  return (
    <View style={styles.OrderContainer}>
      <Text style={styles.text}>{new Date(item.createdAt).toLocaleString()}</Text>
      <Text style={styles.text}>{total}</Text>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  OrderContainer: {
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#c9b977",
    borderRadius: 10,
    color:"#ffffff"
  },
  text: {
    fontFamily: "InterBold",
    fontSize: 20,
  },
});

