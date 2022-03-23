import {useTodoContext} from '../../../contexts/TodoContext';

export function useTodoListScreen() {
  const {todos, addTodo} = useTodoContext();
  return {
    data: {
      todos,
    },
    operations: {
      addTodo,
    },
  };
}
