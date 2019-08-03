import React from "react";
import { StyleSheet, StatusBar, WebView } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar hidden />
      <WebView
        style={styles.webView}
        source={{
          uri:
            "https://www.figma.com/proto/O3b3pjNXO2lzSalUzafCnLJQ/AO-App?node-id=376%3A626&viewport=143%2C643%2C0.015625&scaling=scale-down"
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  webView: {
    flex: 1,
    backgroundColor: "red"
  }
});
