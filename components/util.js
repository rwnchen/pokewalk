import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BLUE = {
  OUTER: '#98c8f8',
  INNER: '#78b8e0',
};

const RED = {
  OUTER: '#d04838',
  INNER: '#b83121',
};

const Box = (props) => {
  const borderColor = props.battle ? RED : BLUE;
  const padding = props.battle ? 0 : 12;
  return (
    <View
      style={{
        ...styles.outerBorder,
        borderColor: borderColor.OUTER,
      }}
    >
      <View
        style={{
          ...styles.textbox,
          borderColor: borderColor.INNER,
          padding,
        }}
      >
        {props.children}
      </View>
    </View>
  );
};

const BattleTextBox = (props) => {
  return (
    <View style={styles.battleBoxOuter}>
      <View style={styles.battleBoxInner}>{props.children}</View>
    </View>
  );
};

const PixelText = (props) => {
  const textColor = props.battle ? styles.battleTextColor : styles.textColor;
  return <Text style={{ ...styles.text, ...textColor }}>{props.children}</Text>;
};

const Spacer = (props) => {
  const { height } = props;
  return <View style={{ height, opacity: 0 }} />;
};

const styles = StyleSheet.create({
  textbox: {
    width: '100%',
    display: 'flex',
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 2,
    overflow: 'hidden',
  },
  outerBorder: {
    width: '100%',
    display: 'flex',
    borderRadius: 6,
    borderWidth: 3,
    shadowColor: '#484050',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  text: {
    fontFamily: 'pixel-font',
    fontSize: 24,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  textColor: {
    color: '#504060',
    textShadowColor: '#d0d0b8',
  },
  battleTextColor: {
    color: 'white',
    textShadowColor: '#504060',
  },
  battleBoxOuter: { width: '100%', backgroundColor: '#484050' },
  battleBoxInner: {
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#68a0a0',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#d04838',
    padding: 12,
  },
});

export { Box, BattleTextBox, PixelText, Spacer };
