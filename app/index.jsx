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
import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function HomePage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require("../assets/plant.jpeg")} style={styles.image} />
      <Text style={styles.title}>Welcome to the Plant App!</Text>
      <Text style={styles.subtitle}>Grow your knowledge about plants 🌱</Text>

      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => router.push("/login")} color="#4CAF50" />
        <Button title="Sign Up" onPress={() => router.push("/signup")} color="#2196F3" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#E8F5E9" },
  image: { width: 120, height: 120, marginBottom: 20 },
  title: { fontSize: 26, fontWeight: "bold", color: "#2E7D32", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#388E3C", marginBottom: 30 },
  buttonContainer: { width: "80%", justifyContent: "space-around", height: 100 },
});

