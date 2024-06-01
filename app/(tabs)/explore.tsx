import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, View } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MainTabScreenProps } from "../types";
import { useNavigation } from "@react-navigation/native";

const CERTS = [
  {
    name: "SCS",
    url: require("@/assets/images/SCS.png"),
  },
];

export default function TabTwoScree() {
  const {navigation}: MainTabScreenProps<"Explore"> = useNavigation();

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

      <View style={styles.certList}>
        {CERTS.map((cert) => {
          return (
            <TouchableOpacity
              onPress={() => {
                alert(navigation);
                navigation.navigate("Cources", { cert_id: cert.name });
              }}
              key={cert.name}
            >
              <Image
                source={cert.url}
                style={{ width: 120, height: 120, cursor: "pointer" }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
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
  certList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 30,
    columnGap: 30,
  },
});
