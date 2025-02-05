// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import { useRouter } from 'expo-router';

// export default function SignUpScreen() {
//   const router = useRouter();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign Up</Text>
//       {/* Add your sign-up form or inputs here */}
//       <Button title="Back to Home" onPress={() => router.push('/')} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1, 
//     justifyContent: 'center', 
//     alignItems: 'center', 
//     backgroundColor: '#fff' 
//   },
//   title: { 
//     fontSize: 28, 
//     fontWeight: 'bold', 
//     marginBottom: 20 
//   }
// });
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";

export default function SignUpScreen() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image source={require("../assets/seedling.jpeg")} style={styles.image} />
      <Text style={styles.title}>Sign Up</Text>

      <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />

      {/* <Button title="Sign Up" onPress={() => alert("Account Created!")} color="#2196F3" /> */}
      <Button title="Sign Up" onPress={() => router.push("/news")} color="#2196F3" />

      <Text style={styles.link} onPress={() => router.push("/login")}>Already have an account? Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#E8F5E9" },
  image: { width: 100, height: 100, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold", color: "#2E7D32", marginBottom: 20 },
  input: { width: "80%", height: 40, borderWidth: 1, borderColor: "#4CAF50", borderRadius: 8, paddingLeft: 10, marginBottom: 15, backgroundColor: "#fff" },
  link: { color: "#2196F3", marginTop: 10 },
});
