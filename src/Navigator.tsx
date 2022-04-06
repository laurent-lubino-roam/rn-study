import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import TodoListScreen from './features/todo/TodoListScreen';
import TodoScreen from './features/todo/TodoScreen';

export type ParamList = {
  TodoList: {};
  Todo: {
    id: string;
  };
};

export type NavProps = NativeStackNavigationProp<ParamList>;

const Stack = createNativeStackNavigator<ParamList>();

const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="TodoList"
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: 'transparent'},
      }}>
      <Stack.Screen name="TodoList" component={TodoListScreen} />
      <Stack.Screen name="Todo" component={TodoScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
