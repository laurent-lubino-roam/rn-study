import {
  ColorValue,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'outlined' | 'contained';
  color?: ColorValue;
  style?: ViewStyle;
};

const Button = ({
  title,
  onPress,
  style,
  variant = 'contained',
  color = 'royalblue',
}: ButtonProps) => {
  if (variant === 'contained') {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={[styles.buttonBase, {backgroundColor: color}, style]}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor="aliceblue"
      style={[styles.buttonBase, styles.oulined, {borderColor: color}, style]}>
      <Text style={[styles.title, {color}]}>{title}</Text>
    </TouchableHighlight>
  );
};

export default Button;

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttonBase: {
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  oulined: {
    borderWidth: 1,
  },
});
