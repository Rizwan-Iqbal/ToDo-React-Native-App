import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();

    // console.log(task)
    setTaskItems([...taskItems, task])
    setTask(null);
    

  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);

  }
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working oszsssan your app!</Text> */}
      {/* <StatusBar style="auto" /> */}

      <View style={styles.tasksWrapper}>

        <Text style={styles.sectionTitle}> Today's Tasks</Text>
        <View style={styles.items}>
          <ScrollView>
            {

              taskItems.map((item, index) => {

                return <TouchableOpacity key={index} onPress={() => completeTask(index)}>

                  <Task text={item} />

                </TouchableOpacity>
              })
            }
          </ScrollView>

        </View>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper} >

        <TextInput style={styles.input} value={task} placeholder='Write a Task' onChangeText={text => setTask(text)} />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>
              +

            </Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',

  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    height: '60%',

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",

  },
  items: {
    marginTop: 30,

  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',

  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    width: 250,
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
