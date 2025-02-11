// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>hello Mama</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import LoginScreen from './screens/LoginScreen';
// import SignUpScreen from './screens/SignUpScreen';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="SignUp" component={SignUpScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// import { Stack } from 'expo-router';

// export default function Layout() {
//   return (
//     <Stack
//       screenOptions={{
//         headerStyle: { backgroundColor: '#4CAF50' },
//         headerTintColor: '#fff',
//         headerTitleAlign: 'center',
//       }}
//     />
//   );
// }
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import { Ionicons } from "@expo/vector-icons";
// import CropsScreen from "./crops";
// import NewsScreen from "./news";
// import AccountScreen from "./account";

// const Tab = createBottomTabNavigator();

// export default function Layout() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ color, size }) => {
//             let iconName;
//             if (route.name === "Your Crops") iconName = "leaf-outline";
//             else if (route.name === "News") iconName = "newspaper-outline";
//             else if (route.name === "Account") iconName = "person-outline";
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: "#4CAF50",
//           tabBarInactiveTintColor: "gray",
//         })}
//       >
//         <Tab.Screen name="Your Crops" component={CropsScreen} />
//         <Tab.Screen name="News" component={NewsScreen} />
//         <Tab.Screen name="Account" component={AccountScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';
// import CropsScreen from './crops';  // Your crops page
// import NewsScreen from './news';    // Your news page
// import AccountScreen from './account';  // Your account page

// const Tab = createBottomTabNavigator();

// export default function Layout() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color, size }) => {
//           let iconName;
//           if (route.name === "Your Crops") iconName = "leaf-outline";
//           else if (route.name === "News") iconName = "newspaper-outline";
//           else if (route.name === "Account") iconName = "person-outline";
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: "#4CAF50",
//         tabBarInactiveTintColor: "gray",
//       })}
//     >
//       <Tab.Screen name="Your Crops" component={CropsScreen} />
//       <Tab.Screen name="News" component={NewsScreen} />
//       <Tab.Screen name="Account" component={AccountScreen} />
//     </Tab.Navigator>
//   );
// }
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}






