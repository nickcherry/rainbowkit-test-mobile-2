import React, { FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Linking, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

interface DeepLinkReplacement {
  httpsHostAndProtocol: string;
  appScheme: string;
}

const walletDeepLinkHosts = [
  'https://metamask.app.link',
  'https://rnbwapp.com',
];

const App: FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <WebView
        source={{
          uri: 'https://funny-bombolone-7101cc.netlify.app/',
        }}
        onShouldStartLoadWithRequest={(event) => {
          for (const walletDeepLinkHost of walletDeepLinkHosts) {
            if (event.url.startsWith(walletDeepLinkHost)) {
              Linking.openURL(event.url);
              return false;
            }
          }

          return true;
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
