// import React, { useState, useEffect } from "react";
// import { View, Text, ScrollView, Image, ActivityIndicator, StyleSheet, Button } from "react-native";
// import { useRouter } from "expo-router";

// export default function NewsPage() {
//   const [articles, setArticles] = useState([]); // ✅ Ensure articles always has a default empty array
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     fetch("https://newsapi.org/v2/everything?q=plants OR animals&language=en&apiKey=YOUR_NEWS_API_KEY")
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.articles) {
//           setArticles(data.articles);
//         } else {
//           setArticles([]); // ✅ Ensure articles is never undefined
//         }
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching news:", error);
//         setArticles([]); // ✅ Prevent crashes due to API errors
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>🌿 Latest News on Plants & Animals 🦜</Text>
//       {loading ? (
//         <ActivityIndicator size="large" color="#4CAF50" />
//       ) : (
//         <ScrollView>
//           {articles.length > 0 ? (
//             articles.slice(0, 5).map((article, index) => (
//               <View key={index} style={styles.newsCard}>
//                 {article.urlToImage && <Image source={{ uri: article.urlToImage }} style={styles
// import React from "react";
// import { View, Text, ScrollView, Image, StyleSheet, Button } from "react-native";
// import { useRouter } from "expo-router";

// export default function NewsPage() {
//   const router = useRouter();

//   // 🌱 Static demo news data (No API required)
//   const demoArticles = [
//     {
//       title: "New Plant Species Discovered in Amazon Rainforest",
//       description: "Scientists have discovered a new plant species that thrives in humid conditions.",
//       urlToImage: "https://www.nationalgeographic.com/content/dam/news/2021/01/05/plant-species-rainforest.jpg",
//     },
//     {
//       title: "Why Houseplants Improve Your Mental Health",
//       description: "Studies show that keeping indoor plants can reduce stress and increase focus.",
//       urlToImage: "https://www.healthline.com/hlcmsresource/images/houseplants-mental-health.jpg",
//     },
//     {
//       title: "Wildlife Conservation Efforts See Positive Results",
//       description: "Recent efforts in animal conservation have led to an increase in endangered species' populations.",
//       urlToImage: "https://www.wwf.org.uk/sites/default/files/styles/social_share_image/public/2016-10/GiantPanda.jpg",
//     },
//     {
//       title: "Top 5 Air-Purifying Plants for Your Home",
//       description: "These plants not only look great but also help clean indoor air.",
//       urlToImage: "https://www.gardeningknowhow.com/wp-content/uploads/2019/10/air-purifying-plants.jpg",
//     },
//     {
//       title: "The Secret Communication Between Trees",
//       description: "Forests have a hidden network where trees share nutrients and information.",
//       urlToImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Forest-communication.jpg/1200px-Forest-communication.jpg",
//     },
//   ];

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>🌿 Latest News on Plants & Animals 🦜</Text>
//       <ScrollView>
//         {demoArticles.map((article, index) => (
//           <View key={index} style={styles.newsCard}>
//             <Image source={{ uri: article.urlToImage }} style={styles.image} />
//             <Text style={styles.title}>{article.title}</Text>
//             <Text style={styles.description}>{article.description}</Text>
//           </View>
//         ))}
//       </ScrollView>
//       <Button title="Back to Home" onPress={() => router.push("/")} color="#4CAF50" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#E8F5E9", padding: 10 },
//   header: { fontSize: 22, fontWeight: "bold", color: "#2E7D32", textAlign: "center", marginVertical: 10 },
//   newsCard: { backgroundColor: "#fff", padding: 10, borderRadius: 8, marginBottom: 15, shadowColor: "#000", shadowOpacity: 0.2, shadowRadius: 5 },
//   image: { width: "100%", height: 200, borderRadius: 8 },
//   title: { fontSize: 18, fontWeight: "bold", color: "#333", marginTop: 10 },
//   description: { fontSize: 14, color: "#555", marginTop: 5 },
// });
import React from "react";
import { View, Text, ScrollView, Image, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";

export default function NewsPage() {
  const router = useRouter();

  // 🌱 News Articles with Local Images
  const demoArticles = [
    {
      title: "🌿 New Plant Species Discovered in Amazon",
      description: "Scientists discovered a unique plant species that thrives in humid rainforest conditions.",
      imageSource: require("../../assets/amazon_plant.jpg"),
    },
    {
      title: "🧘‍♀️ Houseplants Improve Mental Health",
      description: "Studies show that keeping indoor plants can reduce stress and increase focus.",
      imageSource: require("../../assets/houseplants.jpg"),
    },
    {
      title: "🐼 Wildlife Conservation Efforts Succeed",
      description: "Recent conservation efforts led to an increase in endangered species' populations.",
      imageSource: require("../../assets/wildlife_conservation.jpg"),
    },
    {
      title: "🌱 Top 5 Air-Purifying Plants for Your Home",
      description: "These plants not only look great but also help clean indoor air naturally.",
      imageSource: require("../../assets/air_purifying_plants.jpg"),
    },
    {
      title: "🌳 The Secret Communication Between Trees",
      description: "Forests have a hidden network where trees share nutrients and information.",
      imageSource: require("../../assets/tree_communication.jpg"),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🌿 Latest News on Plants & Animals 🦜</Text>
      <ScrollView>
        {demoArticles.map((article, index) => (
          <View key={index} style={styles.newsCard}>
            <Image source={article.imageSource} style={styles.image} />
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.description}>{article.description}</Text>
          </View>
        ))}
      </ScrollView>
      <Button title="Back to Home" onPress={() => router.push("/tabs")} color="#4CAF50" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E8F5E9", padding: 10 },
  header: { fontSize: 22, fontWeight: "bold", color: "#2E7D32", textAlign: "center", marginVertical: 10 },
  newsCard: { backgroundColor: "#fff", padding: 10, borderRadius: 8, marginBottom: 15, shadowColor: "#000", shadowOpacity: 0.2, shadowRadius: 5 },
  image: { width: "100%", height: 200, borderRadius: 8 },
  title: { fontSize: 18, fontWeight: "bold", color: "#333", marginTop: 10 },
  description: { fontSize: 14, color: "#555", marginTop: 5 },
});


