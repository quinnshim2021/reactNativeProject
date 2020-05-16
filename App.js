import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CameraApp from './Camera';

export default function App() {
  return (
    <View style={styles.container}>
      <CameraApp />
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
