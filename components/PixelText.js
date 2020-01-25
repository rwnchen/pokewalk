import React from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';

import { TEXTBOX_BOTTOM, TEXTBOX_MIDDLE, TEXTBOX_TOP } from '../assets';

const TextBox = (props) => {
  return (
    <View>
      <ImageBackground source={TEXTBOX_TOP} style={styles.textboxTop} />
      <PixelText>{props.children}</PixelText>
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
  textboxTop: {
    width: '80%',
    height: 6,
  },
});

export { TextBox, PixelText };
