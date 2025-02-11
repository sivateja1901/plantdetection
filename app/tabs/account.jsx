import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";

export default function AccountScreen() {
  const router = useRouter(); // ✅ Use router for navigation

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/user_icon.png")} style={styles.image} />
      <Text style={styles.title}>👤 Account Details</Text>
      <Text style={styles.text}>Name: Siva Teja</Text>
      <Text style={styles.text}>Email: sivateja@gmail.com</Text>

      {/* 🛑 Sign Out and Navigate to Home */}
      <Button
        title="Sign Out"
        onPress={() => router.push("/")} 
        color="#E53935"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#E8F5E9", padding: 20 },
  image: { width: 100, height: 100, borderRadius: 50, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold", color: "#2E7D32", marginBottom: 10 },
  text: { fontSize: 16, color: "#555", marginBottom: 5 },
});
