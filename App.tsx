import React, { FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Linking, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const App: FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <WebView
        onShouldStartLoadWithRequest={(event) => {
          if (event.url === 'about:blank') {
            return true;
          }

          Linking.openURL(event.url);
          return false;
        }}
        source={{
          html: `
            <html>
              <body>
                <style>
                  body {
                    align-items: center;
                    display: flex;
                    flex-direction: column;
                    font-size: 64px;
                    justify-content: center;
                  }
                  a {
                    margin-bottom: 3rem;
                  }
                </style>
                <a href="https://rnbwapp.com/wc">Open Rainbow</a>
                <a href="https://metamask.app.link">Open Metamask</a>
                <a href="https://google.com">Open Google</a>
              </body>
            </html>`,
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
