import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CartItem = ({item}) => {
  return (
    <View style={styles.ItemContainer}>
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.text}>{item.brand}</Text>
      <Text style={styles.text}>{item.price}</Text>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
  ItemContainer: {
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 50,
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