import {useTodoContext} from '../../../contexts/TodoContext';

export function useTodoListScreen() {
  const {todos, addTodo, editTodo} = useTodoContext();
  const onCheckedChange = (id: string, checked: boolean) => {
    editTodo(id, {checked});
  };
  return {
    data: {
      todos,
    },
    operations: {
      addTodo,
      editTodo,
      onCheckedChange,
    },
  };
}
