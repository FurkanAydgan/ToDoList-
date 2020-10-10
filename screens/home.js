import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm";

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);

  const [review, setReviews] = useState([
    { title: "Örnek ", rating: 5, body: "Aslan", key: "1" },
  ]);

  const pressHandler = (key) => {
    setReviews((prevRewiev) => prevRewiev.filter((todo) => todo.key != key));
  };

  const addReview = (eklenecek) => {
    eklenecek.key = Math.random().toString();
    setReviews((eklenmis) => {
      return [eklenecek, ...eklenmis];
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modelContent}>
            <MaterialIcons
              name="close"
              size={24}
              style={{ ...styles.modelToggle, ...styles.modelClose }}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setModalOpen(true)}
        style={styles.modelToggle}
      />

      <FlatList
        data={review}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
               pressHandler={()=>pressHandler(item.key) }
          >
            <Card pressHandler={() => pressHandler(item.key)}>
              <Text style={globalStyles.titleText}> {item.title} </Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modelToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },

  modelClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modelContent: {
    flex: 1,
  },
});
