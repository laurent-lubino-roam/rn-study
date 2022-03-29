import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import TodoList from './components/TodoList';
import {useTodoListScreen} from './viewModels/useTodoListScreen';

const TodoListScreen = () => {
  const {
    data: {todos},
    operations: {addTodo, onCheckedChange},
  } = useTodoListScreen();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Todos</Text>
        <TouchableHighlight
          onPress={() => addTodo({title: 'abc'})}
          underlayColor="lightgrey"
          style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableHighlight>
      </View>
      <TodoList todos={todos} onCheckedChange={onCheckedChange} />
    </View>
  );
};

export default TodoListScreen;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  addButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 26,
    lineHeight: 30,
    fontWeight: 'bold',
    color: 'black',
  },
});
