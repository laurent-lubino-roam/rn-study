import {Todo, TodoInitialValues} from '../models/Todo';

export class TodoController {
  todos: Array<Todo> = [];

  getTodos = (): Array<Todo> => this.todos;
  setTodos = (todos: Array<Todo>): void => {
    this.todos = todos;
  };
  addTodo = (todo: TodoInitialValues): void => {
    this.todos.push(new Todo(todo));
  };
  deleteTodo = (id: Todo['id']): void => {
    this.todos.filter(todo => todo.id === id);
  };
  getTodoById = (id: Todo['id']): Todo | undefined => {
    return this.todos.find(todo => todo.id === id);
  };
  editTodo = (
    id: Todo['id'],
    changes: Partial<Pick<Todo, 'title' | 'description' | 'checked'>>,
  ): void => {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index === -1) {
      console.warn(`No todo found with id: ${id}`);
      return;
    }
    Object.entries(changes).forEach(([k, v]) => {
      // @ts-ignore
      this.todos[index][k] = v;
    });
  };
}
