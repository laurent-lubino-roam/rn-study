import {StyleSheet, Switch, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Todo} from '../../../models/Todo';

type TodoItemProps = {
  todo: Todo;
  onCheckedChange: (checked: boolean) => void;
  onGoToTodo: () => void;
};

const TodoItem = ({todo, onCheckedChange, onGoToTodo}: TodoItemProps) => {
  return (
    <View style={styles.container}>
      <Switch
        value={todo.checked}
        onValueChange={value => onCheckedChange(value)}
        style={styles.check}
      />
      <TouchableOpacity style={styles.titleContainer} onPress={onGoToTodo}>
        <Text style={styles.title}>{todo.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  check: {
    marginRight: 8,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: 'black',
  },
});
