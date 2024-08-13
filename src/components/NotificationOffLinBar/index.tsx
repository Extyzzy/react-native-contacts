import { useNetInfo } from "@react-native-community/netinfo";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NotificationOffLinBar = () => {
  const netInfo = useNetInfo();

  if (!netInfo.isConnected) {
    return (
      <View style={styles.container}>
        <Text style={styles.info}>You are offline. Check your internet connection</Text>
      </View>
    );
  }

  return <></>;
};

const styles = StyleSheet.create({
  container: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 8,
    backgroundColor: "#fe7968",
    display: "flex",
    padding: 15,
    justifyContent: "center",
  },
  info: {
    textAlign: "center",
  },
});

export default NotificationOffLinBar;
