import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import TodoProvider from './contexts/TodoContext';
import TodoListScreen from './features/todo/TodoListScreen';

const App = () => {
  return (
    <TodoProvider>
      <SafeAreaView style={styles.backgroundStyle}>
        <TodoListScreen />
      </SafeAreaView>
    </TodoProvider>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
});

export default App;
