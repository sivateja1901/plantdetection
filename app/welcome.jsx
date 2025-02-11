import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function WelcomePage() {
  const navigation = useNavigation(); // ✅ Correct way to navigate

  return (
    <View style={styles.container}>
      <Text style={styles.header}>index</Text>
      <Image source={require("../assets/plant.jpeg")} style={styles.image} />
      <Text style={styles.title}>Welcome to the Plant App!</Text>
      <Text style={styles.subtitle}>Grow your knowledge about plants 🌱</Text>

      <View style={styles.buttonContainer}>
        <Button title="LOGIN" onPress={() => navigation.navigate("Login")} color="#4CAF50" />
        <Button title="SIGN UP" onPress={() => navigation.navigate("SignUp")} color="#2196F3" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "#E8F5E9", paddingTop: 50 },
  header: { fontSize: 20, fontWeight: "bold", color: "#fff", backgroundColor: "#4CAF50", width: "100%", textAlign: "center", paddingVertical: 10 },
  image: { width: 120, height: 120, marginVertical: 20 },
  title: { fontSize: 24, fontWeight: "bold", color: "#2E7D32", textAlign: "center" },
  subtitle: { fontSize: 16, color: "#388E3C", textAlign: "center", marginBottom: 30 },
  buttonContainer: { width: "80%", justifyContent: "space-between", height: 100 },
});
