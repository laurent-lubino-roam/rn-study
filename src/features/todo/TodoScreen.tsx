import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import {useTodoScreen} from './viewModels/useTodoScreen';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {ParamList} from '../../Navigator';

type TodoRouteProps = RouteProp<ParamList, 'Todo'>;

const TodoScreen = () => {
  const navigation = useNavigation();
  const {params} = useRoute<TodoRouteProps>();
  const {
    data: {todo},
  } = useTodoScreen(params.id);
  return (
    <View>
      <View style={styles.header}>
        <TouchableHighlight
          style={styles.backButton}
          onPress={navigation.goBack}
          underlayColor="lightgrey">
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableHighlight>
        <Text style={styles.title}>{todo?.title}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.description}>{todo?.description}</Text>
      </View>
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    padding: 12,
  },
  content: {
    padding: 12,
  },
  backButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  backButtonText: {
    fontSize: 26,
    lineHeight: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  title: {
    color: 'black',
    fontSize: 26,
    fontWeight: 'bold',
  },
  description: {
    color: 'black',
    fontSize: 16,
  },
});
