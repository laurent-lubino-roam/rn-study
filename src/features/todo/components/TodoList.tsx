import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Todo} from '../../../models/Todo';
import TodoItem from './TodoItem';

type TodoListProps = {
  todos: Array<Todo>;
  onCheckedChange: (id: string, checked: boolean) => void;
};

const TodoList = ({todos, onCheckedChange}: TodoListProps) => {
  if (!todos?.length) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>You got nothing to do!</Text>
        <Text style={styles.emptyText}>Press the + button to add one!</Text>
      </View>
    );
  }
  return (
    <FlatList
      style={styles.todoList}
      data={todos}
      renderItem={({item}) => (
        <TodoItem
          todo={item}
          onCheckedChange={checked => onCheckedChange(item.id, checked)}
        />
      )}
    />
  );
};

export default TodoList;

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: 'lightgrey',
  },
  todoList: {
    flex: 1,
  },
});
