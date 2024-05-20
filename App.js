import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View
    style={{
      flex: 1,
      iustifyContent: "center",
      alignItems: "center",
      backgroundColor: "lightblue",
    }}>
      <Text style={{ fontSize: 24, color: "firebrick"}}>
        Hello,Inline Styles!
      </Text>
      <Image source={{uri: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" }}
      width={64}
      height={64}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
