import {StyleSheet, Switch, Text, View} from 'react-native';
import React from 'react';
import {Todo} from '../../../models/Todo';

type TodoItemProps = {
  todo: Todo;
  onCheckedChange: (checked: boolean) => void;
};

const TodoItem = ({todo, onCheckedChange}: TodoItemProps) => {
  return (
    <View style={styles.container}>
      <Switch
        value={todo.checked}
        onValueChange={value => onCheckedChange(value)}
        style={styles.check}
      />
      <Text style={styles.title}>{todo.title}</Text>
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
  title: {
    fontSize: 16,
    color: 'black',
  },
});
