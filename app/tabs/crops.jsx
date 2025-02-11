import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

export default function CropsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌱 Heal Your Crops & Animals 🐄</Text>
      <Image source={require("../../assets/plant1.jpg")} style={styles.image} />

      <View style={styles.buttonContainer}>
        <Button
          title="Detect Plant Disease"
          onPress={() => alert("Plant Detection Coming Soon!")}
          color="#4CAF50"
        />
        <Button
          title="Detect Animal Disease"
          onPress={() => alert("Animal Detection Coming Soon!")}
          color="#FF9800"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#E8F5E9", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", color: "#2E7D32", marginBottom: 20 },
  image: { width: 120, height: 120, marginBottom: 20 },
  buttonContainer: { width: "80%", justifyContent: "space-around", height: 100 },
});
