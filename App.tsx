import React, { FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const App: FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <WebView
        source={{
          uri: 'https://neon-griffin-f8c8b4.netlify.app',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
