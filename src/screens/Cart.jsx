import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import allCartItems from "../data/cart.json";
import CartItem from "../components/CartItem";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const total = allCartItems.reduce((acc, currentItem)=> acc += (currentItem.quantity * currentItem.price), 0)
    setTotal(total);
    setCartItems(allCartItems);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartItem item={item} />}
        keyExtractor={(cartItem) => cartItem.id}
      />
      <Text style={styles.text}>Total: ${total}</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#19191a",
  },
  text:{
    color:"white",
    fontFamily: "InterBold",
    fontSize: 20,
  }
});
