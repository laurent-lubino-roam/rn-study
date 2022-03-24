import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {TodoInitialValues} from '../../../models/Todo';

type AddTodoModalProps = {
  isOpen: boolean;
  onAddTodo: (todo: TodoInitialValues) => void;
  onDismiss: () => void;
};

const AddTodoModal = ({isOpen, onAddTodo, onDismiss}: AddTodoModalProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const clearInputs = () => {
    setTitle('');
    setDescription('');
  };

  const onAdd = () => {
    onAddTodo({title, description});
    clearInputs();
    onDismiss();
  };
  return (
    <Modal visible={isOpen} transparent={true}>
      <SafeAreaView style={styles.safeArea}>
        <TouchableOpacity onPress={onDismiss} style={styles.background}>
          <TouchableWithoutFeedback onPress={() => null}>
            <View style={styles.container}>
              <View style={styles.header}>
                <Text>Add todo:</Text>
                <TouchableHighlight
                  onPress={() => onDismiss()}
                  underlayColor="lightgrey"
                  style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>x</Text>
                </TouchableHighlight>
              </View>
              <View>
                <Text>Title:</Text>
                <TextInput value={title} onChangeText={setTitle} />
                <Text>Description:</Text>
                <TextInput value={description} onChangeText={setDescription} />
                <Button title="Add" onPress={onAdd} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
};

export default AddTodoModal;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    margin: 24,
    padding: 24,
    borderRadius: 12,
    backgroundColor: 'aliceblue',
    alignSelf: 'stretch',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'grey',
    paddingBottom: 12,
    marginBottom: 12,
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 26,
    lineHeight: 30,
    fontWeight: 'bold',
    color: 'black',
  },
});
