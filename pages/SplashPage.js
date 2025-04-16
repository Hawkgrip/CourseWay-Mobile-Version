// SplashPage.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const SplashPage = () => {
  const [fadeAnim] = useState(new Animated.Value(0));  // Initial opacity value

  useEffect(() => {
    // Start animation
    Animated.timing(fadeAnim, {
      toValue: 1,   // Final opacity value
      duration: 2000, // Duration for the animation
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[styles.text, { opacity: fadeAnim }]}
      >
        Course Way
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#00aeff', // Blue color
  },
});

export default SplashPage;
