import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const Questions = (props) => {

    return (
    <KeyboardAvoidingView style={styles.writeFormWrapper}>
        <TextInput style={styles.input} placeholder={props.text} />
        <TouchableOpacity >
            <View style={styles.addWrapper}>
                <Text style={styles.addText}>Submit</Text>
            </View>
        </TouchableOpacity>
    </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    writeFormWrapper: {
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      },
      input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        borderRadius: 60,
        borderColor: "#C0C0C0",
        borderWidth: 1,
        width: 250,
      },
      addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: "#55BCF6",
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#C0C0C0",
        borderWidth: 1,
      },
      addText: {
      },
});

export default Questions;