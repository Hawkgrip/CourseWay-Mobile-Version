import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

const SplashPage = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate fade-in
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    // Navigate after splash
    setTimeout(() => {
      navigation.replace('HomePage');
    }, 3000); // Wait 3 seconds before navigating
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[styles.text, { opacity: fadeAnim }]}
      >
        CourseWay
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#007BFF', // Blue theme color
  },
});

export default SplashPage;