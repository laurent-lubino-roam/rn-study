import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TodoListScreen = () => {
  return (
    <View>
      <Text style={styles.title}>TodoListScreen</Text>
    </View>
  );
};

export default TodoListScreen;

const styles = StyleSheet.create({
  title: {
    color: 'black',
  },
});
