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
                <a data-href="https://rnbwapp.com/wc">Open Rainbow</a>
                <a data-href="https://metamask.app.link">Open Metamask</a>
                <a data-href="https://google.com">Open Google</a>
                <script>
                  document.addEventListener('DOMContentLoaded', () => {
                    document.querySelectorAll('a').forEach((link) => {
                      link.addEventListener('click', (e) => {
                        const url = e.target.dataset.href;

                        // This works
                        window.location.href = url;

                        // This does not work
                        // window.open(url, '_blank', 'noreferrer,noopener');
                      })
                    })
                  });
                </script>
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
