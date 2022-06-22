import React, { FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Linking, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

interface DeepLinkReplacement {
  httpsHostAndProtocol: string;
  appScheme: string;
}

const deepLinkReplacements: DeepLinkReplacement[] = [
  {
    httpsHostAndProtocol: 'https://metamask.app.link/',
    appScheme: 'metamask://',
  },
  // {
  //   httpsHostAndProtocol: 'https://rnbwapp.com/',
  //   appScheme: 'rainbow://',
  // },
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
          console.log(event);
          const deepLinkReplacement = deepLinkReplacements.find(
            ({ httpsHostAndProtocol }) =>
              event.url.startsWith(httpsHostAndProtocol),
          );

          if (deepLinkReplacement) {
            const targetUrl = decodeURIComponent(
              event.url.replace(
                deepLinkReplacement.httpsHostAndProtocol,
                deepLinkReplacement.appScheme,
              ),
            );
            console.log(`\nattempting to open ${targetUrl}\n`);
            Linking.openURL(targetUrl);
            return false;
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
