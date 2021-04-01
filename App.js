import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from "./components/Task";
import {Keyboard, KeyboardAvoidingView, TextInput, TouchableOpacity} from "react-native";

export default function App() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([
    {text : "🏋️ Work out 30 minutes"},
    {text : "🏫 Ace the react native test"},
    {text : "🍹 Chill out"},
  ]);
  const addTask = () => {
    setTasks([...tasks, {text: value}]);
    setValue("");
    Keyboard.dismiss();
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <Text style={styles.title}>Todo today</Text>
        <View style={styles.taskSection}>
          {tasks.map((task, i) => (
              <Task key={i} text={task.text}/>
            ))}
        </View>
        <View style={styles.addTask}>
          <TextInput
              style={styles.input}
              placeholder="Add a task"
              value={value}
              onChangeText={(text) => setValue(text)}>
          </TextInput>
          <TouchableOpacity onPress={() => addTask()}>
            <View style={styles.btnAdd}>
              <Text style={styles.txtBtn}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8C82FF',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
    marginLeft: 10
  },
  taskSection: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  addTask: {
    padding: 20,
    marginTop: '100%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  input: {
    textAlign: 'center',
    borderRadius: 20,
    padding: 15,
    backgroundColor: '#fff',
    height: 50,
    width: '80%'
  },
  btnAdd: {
    textAlign: 'center',
    borderRadius: 20,
    padding: 12,
    backgroundColor: '#fff',
    height: 50,
    width: 50
  },
  txtBtn: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
