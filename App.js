import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo today</Text>
      <View style={styles.taskSection}>
        <Task text={"🏋️ Work out 30 minutes"}/>
        <Task text={"🏫 Ace the react native test"}/>
        <Task text={"🍹 Chill out"}/>
      </View>
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
  }
});
