import React from "react";
import { View, StatusBar, WebView } from "react-native";

export default function App() {
  return (
    <View>
      <StatusBar hidden />
      <WebView
        source={{
          uri:
            "https://www.figma.com/proto/O3b3pjNXO2lzSalUzafCnLJQ/AO-App?node-id=376%3A626&viewport=143%2C643%2C0.015625&scaling=scale-down"
        }}
      />
    </View>
  );
}
