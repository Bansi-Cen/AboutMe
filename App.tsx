/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

export default function MyFirstReactApp() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: '#000000',
          fontSize: 36,
          padding: 20,
        }}>
        About Me
      </Text>
      <Text
        style={{
          color: '#000000',
          fontSize: 20,
          opacity: 0.85,
        }}>
        Bansi Dholakiya
      </Text>
      <Text
        style={{
          color: '#000000',
          fontSize: 20,
          opacity: 0.85,
        }}>
        Student ID :{' '}
        <Text
          style={{
            fontWeight: 'bold',
          }}>
          301363508
        </Text>
      </Text>
    </View>
  );
}
