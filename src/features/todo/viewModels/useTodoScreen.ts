import {useTodoContext} from '../../../contexts/TodoContext';
import {Todo} from '../../../models/Todo';

export function useTodoScreen(id: string) {
  const {getTodoById, editTodo} = useTodoContext();
  const todo = getTodoById(id);
  const onEditTodo = (
    changes: Partial<Pick<Todo, 'title' | 'description' | 'checked'>>,
  ) => {
    editTodo(id, changes);
  };
  return {
    data: {
      todo,
    },
    operations: {
      onEditTodo,
    },
  };
}
