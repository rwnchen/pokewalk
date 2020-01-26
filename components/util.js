import React from 'react';
import { Image, ImageBackground, View, Text, StyleSheet } from 'react-native';

const BLUE = {
  OUTER: '#98c8f8',
  INNER: '#78b8e0',
};

const RED = {
  OUTER: '#d04838',
  INNER: '#b83121',
};

const Box = (props) => {
  const color = props.battle ? RED : BLUE;
  const padding = props.battle ? 0 : 12;
  return (
    <View style={{ ...styles.outerBorder, borderColor: color.OUTER }}>
      <View style={{ ...styles.textbox, borderColor: color.INNER, padding }}>
        {props.children}
      </View>
    </View>
  );
};

const BattleBox = (props) => {
  return (
    <View>
      <Box>{props.children}</Box>
    </View>
  );
};

const styles = StyleSheet.create({
  textbox: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    overflow: 'hidden',
  },
  outerBorder: {
    borderRadius: 6,
    borderWidth: 2,
  },
});

export { Box, BattleBox };
