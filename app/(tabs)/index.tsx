import { Image, StyleSheet, Platform, Button, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const CERTS = [
  {
    name: "CLF",
    url: require("@/assets/images/CLF.png"),
  },
  {
    name: "DVA",
    url: require("@/assets/images/DVA.png"),
  },
  {
    name: "SAA",
    url: require("@/assets/images/SAA.png"),
  },
  {
    name: "SOA",
    url: require("@/assets/images/SOA.png"),
  },
  {
    name: "DAA",
    url: require("@/assets/images/DAA.png"),
  },
  {
    name: "SAP",
    url: require("@/assets/images/SAP.png"),
  },
  {
    name: "DOP",
    url: require("@/assets/images/DOP.png"),
  },
  {
    name: "MLS",
    url: require("@/assets/images/MLS.png"),
  },
  {
    name: "SCS",
    url: require("@/assets/images/SCS.png"),
  },
  {
    name: "ANS",
    url: require("@/assets/images/ANS.png"),
  },
];

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedText type="subtitle">Get AWS Golden Jacket Journey</ThemedText>

      <View style={styles.certList}>
      {CERTS.map((cert) => {
        return <Image key={cert.name} source={cert.url} style={{width: 120, height: 120}}/>;
      })}
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  certList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 30,
    columnGap: 30
  },
});
