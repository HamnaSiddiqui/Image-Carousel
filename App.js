import { useState, useRef } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const { width, height } = Dimensions.get("window");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const ref = useRef();

  const images = [
    require("./assets/1.jpg"),
    require("./assets/2.jpg"),
    require("./assets/3.jpg"),
  ];

  function nextImageHandler() {
    console.log("Going to next");
    setCurrentImageIndex(currentImageIndex + 1);
    ref.current.scrollToIndex({
      animated: true,
      index: parseInt(currentImageIndex) + 1,
    });
    console.log("NEXT", currentImageIndex);
  }

  function prevImageHandler() {
    console.log("going to prev");
    setCurrentImageIndex(currentImageIndex - 1);
    ref.current.scrollToIndex({
      animated: true,
      index: parseInt(currentImageIndex) - 1,
    });
    console.log("PREV", currentImageIndex);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Image Carousel</Text>
      <View style={styles.listContainer}>
        <Animated.FlatList
          data={images}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity activeOpacity={1}>
                <Image source={item} style={styles.image} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={true}
          pagingEnabled
          ref={ref}
          style={styles.carousel}
        />
      </View>
      <Animated.View>
        {currentImageIndex == 0 ? null : (
          <TouchableOpacity
            onPress={nextImageHandler}
            style={[styles.arrowButton, { right: 20 }]}
            disabled={currentImageIndex === images.length - 1}
          >
            <Ionicons
              name="arrow-back"
              size={40}
              color="red"
              onPress={prevImageHandler}
            />
          </TouchableOpacity>
        )}
        {images.length - 1 == currentImageIndex ? null : (
          <TouchableOpacity
            onPress={prevImageHandler}
            style={[styles.arrowButton, { left: 20 }]}
            disabled={currentImageIndex === 0}
          >
            <Ionicons
              name="arrow-forward"
              size={40}
              color="red"
              onPress={nextImageHandler}
            />
          </TouchableOpacity>
        )}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    marginHorizontal: 8,
    overflow: "hidden",
  },
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
  carousel: {
    maxHeight: 300,
  },
  image: {
    width: 380,
    height: 270,
    resizeMode: "cover",
    marginVertical: 20,
    marginHorizontal: 6,
  },
  arrowButton: {
    position: "absolute",
    top: "50%",
  },
});
