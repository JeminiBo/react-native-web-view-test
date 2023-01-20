import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  return <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={{ flex: 1 }}>
      {isLoading && <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator /></View>}
      <WebView
        style={{ flex: 1 }}
        source={{ uri: "https://sberbank.ru" }}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => {
          setIsLoading(false)
          Alert.alert('Web view loaded')
        }}
      />
    </SafeAreaView>
  </>
}

export default App;
