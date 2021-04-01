import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = ({text}) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        height: 60,
        marginBottom: 10,
        borderRadius: 10,
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
    square: {
        backgroundColor: '#ccc7fa',
        height: 30,
        width: 30,
        borderRadius: 8,
    },
    itemText: {
        maxWidth: "80%",
        marginLeft: 20
    },
    circular: {
        borderColor: '#2F69FF',
        borderWidth: 3,
        backgroundColor: '#fff',
        height: 17,
        width: 17,
        borderRadius: 7,
    },
});

export default Task;
