import React from 'react';
import { Image, ImageBackground, View, Text, StyleSheet } from 'react-native';

import {
  TEXTBOX_BOTTOM,
  TEXTBOX_MIDDLE_LEFT,
  TEXTBOX_MIDDLE_RIGHT,
  TEXTBOX_TOP,
} from '../assets';

const PixelText = (props) => {
  return (
    <Text style={{ fontFamily: 'pixel-font', fontSize: 24 }}>
      {props.children}
    </Text>
  );
};

export { PixelText };
