import React from 'react';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import { useFonts } from 'expo-font';

import AppNavigation from './src/Navigation';

export default function App() {
  const [loaded] = useFonts({
    WorkSans: require('./assets/fonts/WorkSans.ttf'),
    WorkSansBold: require('./assets/fonts/WorkSans-SemiBold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <AppNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 35 : 0,
  },
});
