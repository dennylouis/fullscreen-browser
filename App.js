import React, { useState } from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";

export default function App() {
  const uri =
    "https://www.figma.com/proto/O3b3pjNXO2lzSalUzafCnLJQ/AO-App?node-id=376%3A626&viewport=143%2C643%2C0.015625&scaling=scale-down";

  const [url, setUrl] = useState("");
  const [showWebView, setShowWebView] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  return (
    <Container>
      {!showWebView && (
        <SafeAreaView>
          <StatusBar />
          <TextInput
            onChangeText={text => setUrl(text)}
            value={url}
            onSubmitEditing={() => setShowWebView(true)}
            keyboardType="url"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Enter URL here"
          />
        </SafeAreaView>
      )}
      {showLoader && <Loader />}
      {showWebView && (
        <>
          <StatusBar hidden />
          <WebView
            source={{ uri }}
            onLoadStart={() => setShowLoader(true)}
            onLoadEnd={() => setShowLoader(false)}
          />
        </>
      )}
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
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
  /* line-height: 24px; */
  flex: 1;
  margin: 16px;
  border-radius: 4px;
`;

const WebView = styled.WebView`
  flex: 1;
  background-color: red;
  height: 100%;
  width: 100%;
`;

const Loader = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: red;
`;
