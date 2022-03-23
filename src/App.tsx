import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import TodoListScreen from './features/todo/TodoListScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <TodoListScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
});

export default App;
