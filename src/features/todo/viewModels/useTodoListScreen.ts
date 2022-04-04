import {useNavigation} from '@react-navigation/native';
import {useTodoContext} from '../../../contexts/TodoContext';
import {NavProps} from '../../../Navigator';

export function useTodoListScreen() {
  const {todos, addTodo, editTodo} = useTodoContext();
  const onCheckedChange = (id: string, checked: boolean) => {
    editTodo(id, {checked});
  };
  const navigation = useNavigation<NavProps>();
  const goToTodo = (id: string) => navigation.navigate('Todo', {id});
  return {
    data: {
      todos,
    },
    operations: {
      addTodo,
      editTodo,
      onCheckedChange,
      goToTodo,
    },
  };
}
