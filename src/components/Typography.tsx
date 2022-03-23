import {StyleSheet, Text, TextProps} from 'react-native';
import React from 'react';

type TypographyProps = {
  variant?: 'h1' | 'paragraph';
};

const Typography = ({
  children,
  variant = 'paragraph',
}: TypographyProps & TextProps) => {
  return <Text style={[styles[variant], styles.base]}>{children}</Text>;
};

export default Typography;

const styles = StyleSheet.create({
  base: {
    color: 'black',
  },
  h1: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 14,
  },
});
