import React from 'react';
import { Image, ImageBackground, View, Text, StyleSheet } from 'react-native';

import {
  TEXTBOX_BOTTOM,
  TEXTBOX_MIDDLE_LEFT,
  TEXTBOX_MIDDLE_RIGHT,
  TEXTBOX_TOP,
} from '../assets';

const Box = (props) => {
  return (
    <View style={styles.outerBorder}>
      <View style={styles.textbox}>{props.children}</View>
    </View>
  );
};

const PixelText = (props) => {
  return (
    <Text style={{ fontFamily: 'pixel-font', fontSize: 24 }}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  textbox: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#78b8e0',
  },
  outerBorder: {
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#98c8f8',
  },
});

export { Box, PixelText };
