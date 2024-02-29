import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from "../data/products.json";

const ItemDetail = ({ navigation, route }) => {
  const [product, setProduct] = useState(null);

  const { id } = route.params;

  useEffect(() => {
    const productFinded = allProducts.find((product) => product.id === id);
    setProduct(productFinded);
  }, [id]);

  return (
    <View style={styles.main}>
      {product ? (
        <View style={styles.container}>
          <Image
            source={{ uri: product.images[0] }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={styles.descriptionText}>{product.title}</Text>
            <Text style={styles.descriptionText}>{product.description}</Text>
            <Text style={styles.descriptionTextPrice}>${product.price}</Text>
            <Pressable style={styles.buy}>
              <Text style={styles.buyText}>Buy now</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <View>
          <Text>Cargando...</Text>
        </View>
      )}
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
    backgroundColor:"#19191a"

  },
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100%",
  },
  image: {
    width: "100%",
    height: 300,
    marginVertical: 15,
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 6,
    backgroundColor:"#3737390",

  },
  descriptionTitle:{
    fontSize:10,
    fontFamily: "InterBold",
    fontSize: 16,
    color: "white",
    paddingVertical: 4,
    fontSize:30,
    marginBottom:10
  },
  descriptionText: {
    fontFamily: "InterRegular",
    fontSize: 16,
    color: "white",
    paddingVertical: 4,
    marginBottom:10

  },
  descriptionTextPrice: {
    fontFamily: "InterRegular",
    fontSize: 25,
    color: "white",
    paddingVertical: 6,
    marginLeft:10,
    marginBottom:10

  },
  buy: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: "#c9b977",
    marginLeft:10
  },
  buyText: {
    fontFamily: "InterBold",
    fontSize: 22,
    color: "white",
  },
});
