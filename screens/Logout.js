import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";

export default class Logout extends Component {
    ComponentDidMount(){
        firebase.auth().singOut();
    }
    render () {
        return (
            <View style={StyleSheet.container}>
                <Text>Logout</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alingItem: "center"
    }
});