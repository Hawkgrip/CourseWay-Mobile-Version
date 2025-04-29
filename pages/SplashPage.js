import React, { useEffect, useRef } from 'react';
import { View, Text, Animated } from 'react-native';

const SplashPage = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;  
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,  
      duration: 2000, 
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      navigation.replace('HomePage');
    }, 4000); 
  }, [fadeAnim]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
      {/* Animated text with fade-in effect */}
      <Animated.Text
        style={{
          fontSize: 40,
          fontWeight: 'bold',
          color: '#007BFF',  // Blue color for the text
          opacity: fadeAnim,  // Bind the opacity to fadeAnim
          transform: [
            {
              translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [50, 0],  // Move text from bottom to top
              }),
            }
          ],
        }}
      >
        CourseWay
      </Animated.Text>
    </View>
  );
};

export default SplashPage;
