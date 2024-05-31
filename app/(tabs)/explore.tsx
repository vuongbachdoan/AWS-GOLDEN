import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Button } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";

export default function TabTwoScreen() {
  const navigation = useNavigation();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
      <ThemedText type="subtitle">Find the cources you interested!</ThemedText>

      <Button title="AWS Developer - Associate" />
      <Button title="AWS Solution Architect - Associate" />
      <Button
        onPress={() => navigation.navigate("cources" as never)}
        title="AWS Security - Speciality"
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
