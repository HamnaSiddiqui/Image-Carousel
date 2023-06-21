import { useState } from "react";
import { View, StyleSheet, Image, Text, Pressable } from "react-native";
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
          sliderHeight={500}
          itemWidth={400}
          itemHeight={400}
          onSnapToItem={(index) => setImageIndex(index)}
        />
      </View>
      <Pressable onPress={prevImageHandler} style={styles.arrowButton}>
        <Ionicons name="heart" size={18} color="black" />
      </Pressable>
      <Pressable onPress={nextImageHandler} style={styles.arrowButton}>
        <Ionicons name="heart" size={18} color="black" />
      </Pressable>
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
  },
  carouselContainer: {
    width: "80%",
    height: 200,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  arrowButton: {
    position: "absolute",
    top: "45%",
  },
});
