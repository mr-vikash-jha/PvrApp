import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = () => {
  const navigation = useNavigation();

  const moveAnimation = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(moveAnimation, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Text>hi</Text>,
      headerStyle: {
        backgroundColor: '#f5f5f5',
        shadowColor: 'transparent',
        shadowOpacity: 0.3,
        shadowOffset: { width: -1, height: 1 },
        shadowRadius: 3,
      },
      headerRight: () => (
        <Pressable style={{ alignItems: 'center', flexDirection: 'row', gap: 4 }}>
          <FontAwesome5 name="comments" size={22} color="#4F8EF7" />
          <FontAwesome5 name="comments" size={22} color="#4F8EF7" />

          <Pressable>
            <Animated.Text
              style={[
                styles.text,
                {
                  transform: [
                    {
                      translateX: moveAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-100, 100],
                      }),
                    },
                  ],
                },
              ]}
            >
              Delhi
            </Animated.Text>
          </Pressable>
        </Pressable>
      ),
    });
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});
