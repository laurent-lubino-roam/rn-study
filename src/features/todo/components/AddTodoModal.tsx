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
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {TodoInitialValues} from '../../../models/Todo';

type AddTodoModalProps = {
  isOpen: boolean;
  onAddTodo: (todo: TodoInitialValues) => void;
  onDismiss: () => void;
};

const AddTodoModal = ({isOpen, onAddTodo, onDismiss}: AddTodoModalProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
    },
  });

  const onAdd = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => {
    onAddTodo({title, description});
    reset();
    onDismiss();
  };

  return (
    <Modal visible={isOpen} transparent>
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
                <Text>Title (required):</Text>
                {!!errors.title && (
                  <Text style={styles.error}>This is required.</Text>
                )}
                <Controller
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                      style={styles.input}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="title"
                />

                <Text>Description:</Text>
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                      style={styles.input}
                      multiline
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                  )}
                  name="description"
                />
                <Button title="Add" onPress={handleSubmit(onAdd)} />
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
  input: {
    borderWidth: 1,
    padding: 6,
    marginBottom: 12,
  },
  error: {
    color: 'red',
  },
});
