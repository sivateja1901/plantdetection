// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// // Main App component
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Welcome to the Plant App!</Text>
//     </View>
//   );
// }

// // Styles for the components
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f7f7f7',
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });
// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import { useRouter } from 'expo-router';

// export default function HomePage() {
//   const router = useRouter();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome to the Plant App!</Text>
//       <View style={styles.buttonContainer}>
//         <Button 
//           title="Login" 
//           onPress={() => router.push('/login')}
//           color="#4CAF50"
//         />
//         <Button 
//           title="Sign Up" 
//           onPress={() => router.push('/signup')}
//           color="#2196F3"
//         />
//       </View>
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
//     marginBottom: 40
//   },
//   buttonContainer: {
//     width: '80%', 
//     justifyContent: 'space-around', 
//     height: 100
//   }
// });
// import React from "react";
// import { View, Text, Button, Image, StyleSheet } from "react-native";
// import { useRouter } from "expo-router";

// export default function HomePage() {
//   const router = useRouter();

//   return (
//     <View style={styles.container}>
//       <Image source={require("../assets/plant.jpeg")} style={styles.image} />
//       <Text style={styles.title}>Welcome to the Plant App!</Text>
//       <Text style={styles.subtitle}>Grow your knowledge about plants 🌱</Text>

//       <View style={styles.buttonContainer}>
//         <Button title="Login" onPress={() => router.push("/login")} color="#4CAF50" />
//         <Button title="Sign Up" onPress={() => router.push("/signup")} color="#2196F3" />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#E8F5E9" },
//   image: { width: 120, height: 120, marginBottom: 20 },
//   title: { fontSize: 26, fontWeight: "bold", color: "#2E7D32", marginBottom: 10 },
//   subtitle: { fontSize: 16, color: "#388E3C", marginBottom: 30 },
//   buttonContainer: { width: "80%", justifyContent: "space-around", height: 100 },
// });
// import React from "react";
// import { View, Text, Button, Image, StyleSheet } from "react-native";
// import { useRouter } from "expo-router";

// export default function WelcomePage() {
//   const router = useRouter();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>index</Text>
//       <Image source={require("../assets/plant.jpeg")} style={styles.image} />
//       <Text style={styles.title}>Welcome to Farmacy!</Text>
//       <Text style={styles.subtitle}>Grow your knowledge about plants 🌱</Text>

//       <View style={styles.buttonContainer}>
//         <Button title="LOGIN" onPress={() => router.push("/login")} color="#4CAF50" />
//         <Button title="SIGN UP" onPress={() => router.push("/signup")} color="#2196F3" />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, alignItems: "center", backgroundColor: "#E8F5E9", paddingTop: 50 },
//   header: { fontSize: 20, fontWeight: "bold", color: "#fff", backgroundColor: "#4CAF50", width: "100%", textAlign: "center", paddingVertical: 10 },
//   image: { width: 120, height: 120, marginVertical: 20 },
//   title: { fontSize: 24, fontWeight: "bold", color: "#2E7D32", textAlign: "center" },
//   subtitle: { fontSize: 16, color: "#388E3C", textAlign: "center", marginBottom: 30 },
//   buttonContainer: { width: "80%", justifyContent: "space-between", height: 100 },
// });
// import React, { useState } from "react";
// import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";
// import { useRouter } from "expo-router";

// export default function LoginScreen() {
//   const router = useRouter();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <View style={styles.container}>
//       <Image source={require("../assets/leaf.jpeg")} style={styles.image} />
//       <Text style={styles.title}>Login</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//         value={username}
//         onChangeText={setUsername}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />

//       <Button
//         title="Login"
//         onPress={() => router.push("/crops")} // Navigate to Crops page
//         color="#4CAF50"
//       />

//       <Text style={styles.link} onPress={() => router.push("/signup")}>
//         Don't have an account? Sign up
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#E8F5E9" },
//   image: { width: 100, height: 100, marginBottom: 20 },
//   title: { fontSize: 24, fontWeight: "bold", color: "#2E7D32", marginBottom: 20 },
//   input: { width: "80%", height: 40, borderWidth: 1, borderColor: "#4CAF50", borderRadius: 8, paddingLeft: 10, marginBottom: 15, backgroundColor: "#fff" },
//   link: { color: "#2196F3", marginTop: 10 },
// });
import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";

export default function WelcomePage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Farmacy!</Text>
      <Image source={require("../assets/plant.jpeg")} style={styles.image} />
      <Text style={styles.subtitle}>Grow your knowledge about plants and animals 🌱</Text>

      <View style={styles.buttonContainer}>
        <Button title="LOGIN" onPress={() => router.push("/login")} color="#4CAF50" />
        <Button title="SIGN UP" onPress={() => router.push("/signup")} color="#2196F3" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "#E8F5E9", paddingTop: 50 },
  title: { fontSize: 24, fontWeight: "bold", color: "#2E7D32", marginBottom: 20 },
  subtitle: { fontSize: 16, color: "#388E3C", textAlign: "center", marginBottom: 30 },
  image: { width: 120, height: 120, marginVertical: 20 },
  buttonContainer: { width: "80%", justifyContent: "space-between", height: 100 },
});



