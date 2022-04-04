import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TodoProvider from './contexts/TodoContext';
import Navigator from './Navigator';

const App = () => {
  return (
    <TodoProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.backgroundStyle}>
          <Navigator />
        </SafeAreaView>
      </NavigationContainer>
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
