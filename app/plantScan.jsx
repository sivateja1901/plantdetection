// import React, { useState, useEffect, useRef } from "react";
// import { View, Text, Button, Image, StyleSheet } from "react-native";
// import { useRouter } from "expo-router";
// import { Camera, CameraType } from "expo-camera"; // ✅ Correct Import

// export default function PlantScan() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const cameraRef = useRef(null);
//   const router = useRouter();

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       setHasPermission(status === "granted");
//     })();
//   }, []);

//   const takePicture = async () => {
//     if (cameraRef.current) {
//       const photo = await cameraRef.current.takePictureAsync();
//       setCapturedImage(photo.uri);
//     }
//   };

//   if (hasPermission === null) {
//     return <View><Text>Requesting camera permission...</Text></View>;
//   }

//   if (hasPermission === false) {
//     return <View><Text>No access to camera</Text></View>;
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>📷 Capture Plant Image</Text>

//       {/* Display an Image Above the Button */}
//       <Image source={require("../../assets/plant_scan.png")} style={styles.previewImage} />

//       {/* Camera Preview */}
//       {!capturedImage ? (
//         <Camera
//           style={styles.camera}
//           type={CameraType.back} // ✅ Set Camera Type
//           ref={cameraRef} // ✅ Use useRef instead of useState
//         />
//       ) : (
//         <Image source={{ uri: capturedImage }} style={styles.image} />
//       )}

//       {/* Buttons */}
//       <View style={styles.buttonContainer}>
//         {!capturedImage ? (
//           <Button title="Capture Image" onPress={takePicture} color="#4CAF50" />
//         ) : (
//           <Button title="Retake Image" onPress={() => setCapturedImage(null)} color="#FF9800" />
//         )}
//         <Button title="Back to Crops" onPress={() => router.push("/tabs/crops")} color="#2196F3" />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#E8F5E9", padding: 20 },
//   title: { fontSize: 22, fontWeight: "bold", color: "#2E7D32", marginBottom: 10 },
//   previewImage: { width: 200, height: 200, marginBottom: 20 },
//   camera: { width: 300, height: 400, marginBottom: 20 },
//   image: { width: 300, height: 400, marginBottom: 20 },
//   buttonContainer: { flexDirection: "row", justifyContent: "space-around", width: "100%", marginTop: 20 },
// });
// import React, { useState, useEffect, useRef } from "react";
// import { View, Text, Button, Image, StyleSheet } from "react-native";
// import { useRouter } from "expo-router";
// import { Camera } from "expo-camera"; // ✅ Fixed Import

// export default function PlantScan() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const cameraRef = useRef(null);
//   const router = useRouter();

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       setHasPermission(status === "granted");
//     })();
//   }, []);

//   const takePicture = async () => {
//     if (cameraRef.current) {
//       const photo = await cameraRef.current.takePictureAsync();
//       setCapturedImage(photo.uri);
//     }
//   };

//   if (hasPermission === null) {
//     return <View><Text>Requesting camera permission...</Text></View>;
//   }

//   if (hasPermission === false) {
//     return <View><Text>No access to camera</Text></View>;
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>📷 Capture Plant Image</Text>

//       {/* Display Image Above the Button */}
//       <Image source={require("../assets/plant_scan.jpg")} style={styles.previewImage} />

//       {/* Camera Preview */}
//       {!capturedImage ? (
//         <Camera
//           style={styles.camera}
//           type={Camera.Constants.Type.back} // ✅ Safe way to set Camera Type
//           ref={cameraRef}
//         />
//       ) : (
//         <Image source={{ uri: capturedImage }} style={styles.image} />
//       )}

//       {/* Buttons */}
//       <View style={styles.buttonContainer}>
//         {!capturedImage ? (
//           <Button title="Capture Image" onPress={takePicture} color="#4CAF50" />
//         ) : (
//           <Button title="Retake Image" onPress={() => setCapturedImage(null)} color="#FF9800" />
//         )}
//         <Button title="Back to Crops" onPress={() => router.push("/tabs/crops")} color="#2196F3" />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#E8F5E9", padding: 20 },
//   title: { fontSize: 22, fontWeight: "bold", color: "#2E7D32", marginBottom: 10 },
//   previewImage: { width: 200, height: 200, marginBottom: 20 },
//   camera: { width: 300, height: 400, marginBottom: 20 },
//   image: { width: 300, height: 400, marginBottom: 20 },
//   buttonContainer: { flexDirection: "row", justifyContent: "space-around", width: "100%", marginTop: 20 },
// });
import React, { useState, useEffect, useRef } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Camera } from "expo-camera";

export default function PlantScan() {
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setCapturedImage(photo.uri);
    }
  };

  if (hasPermission === null) {
    return <View><Text>Requesting camera permission...</Text></View>;
  }

  if (hasPermission === false) {
    return <View><Text>No access to camera</Text></View>;
  }

  // Ensure Camera and Constants are defined
  if (!Camera || !Camera.Constants) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>📷 Camera Module Not Loaded</Text>
        <Text style={styles.errorText}>
          The camera module could not be loaded. Please ensure you are using a physical device and have installed all dependencies correctly.
        </Text>
        <Button title="Back to Crops" onPress={() => router.push("/tabs/crops")} color="#2196F3" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📷 Capture Plant Image</Text>

      {/* Display Image Above the Button */}
      <Image source={require("../assets/plant_scan.jpg")} style={styles.previewImage} />

      {/* Camera Preview */}
      {!capturedImage ? (
        <Camera
          style={styles.camera}
          type={Camera.Constants ? Camera.Constants.Type.back : undefined}
          ref={cameraRef}
        />
      ) : (
        <Image source={{ uri: capturedImage }} style={styles.image} />
      )}

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        {!capturedImage ? (
          <Button title="Capture Image" onPress={takePicture} color="#4CAF50" />
        ) : (
          <Button title="Retake Image" onPress={() => setCapturedImage(null)} color="#FF9800" />
        )}
        <Button title="Back to Crops" onPress={() => router.push("/tabs/crops")} color="#2196F3" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#E8F5E9", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", color: "#2E7D32", marginBottom: 10 },
  previewImage: { width: 200, height: 200, marginBottom: 20 },
  camera: { width: 300, height: 400, marginBottom: 20 },
  image: { width: 300, height: 400, marginBottom: 20 },
  buttonContainer: { flexDirection: "row", justifyContent: "space-around", width: "100%", marginTop: 20 },
  errorText: { color: "#D32F2F", textAlign: "center", marginBottom: 20 },
});