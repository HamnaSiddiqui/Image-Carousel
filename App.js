import { useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    require("./assets/1.jpg"),
    require("./assets/2.jpg"),
    require("./assets/3.jpg"),
  ];

  function nextImageHandler() {
    setImageIndex((prevImageIndex) => prevImageIndex + 1);
  }

  function prevImageHandler() {
    setImageIndex((prevImageIndex) => prevImageIndex - 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Image Carousel</Text>
      <View style={styles.carouselContainer}>
        <Carousel
          data={images}
          renderItem={({ item }) => (
            <Image source={item} style={styles.image} />
          )}
          sliderWidth={500}
          itemWidth={400}
          onSnapToItem={(index) => setImageIndex(index)}
        />
      </View>
      <TouchableOpacity
        onPress={prevImageHandler}
        style={[styles.arrowButton, { right: 20 }]}
        disabled={imageIndex === images.length - 1}
      >
        <Ionicons name="arrow-forward" size={40} color="red" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={nextImageHandler}
        style={[styles.arrowButton, { left: 20 }]}
        disabled={imageIndex === 0}
      >
        <Ionicons name="arrow-back" size={40} color="red" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
  },
  carouselContainer: {
    width: "115%",
    height: 200,
  },
  image: {
    width: "90%",
    height: "100%",
    resizeMode: "cover",
  },
  arrowButton: {
    position: "absolute",
    top: "50%",
  },
});
