import React, { useState } from "react";
import { StatusBar, ActivityIndicator } from "react-native";
import styled from "styled-components/native";

export default function App() {
  const [uri, setUri] = useState("");
  const [showWebView, setShowWebView] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  return (
    <Container>
      <StatusBar hidden={showWebView && !showLoader} />
      {!showWebView && (
        <SafeAreaView>
          <TextInput
            onChangeText={text => setUri(text)}
            value={uri}
            onSubmitEditing={() => setShowWebView(true)}
            keyboardType="web-search"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Enter URL here"
          />
        </SafeAreaView>
      )}
      {showLoader && (
        <Overlay>
          <ActivityIndicator />
        </Overlay>
      )}
      {showWebView && (
        <WebView
          source={{ uri }}
          onLoadStart={() => setShowLoader(true)}
          onLoadEnd={() => setShowLoader(false)}
        />
      )}
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 100%;
  width: 100%;
  flex-direction: row;
`;

const Overlay = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: white;
  height: 100%;
  width: 100%;
  flex-direction: row;
`;

const TextInput = styled.TextInput`
  background-color: #eee;
  height: 48px;
  padding: 12px;
  font-size: 16px;
  flex: 1;
  margin: 16px;
  border-radius: 4px;
`;

const WebView = styled.WebView`
  flex: 1;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
