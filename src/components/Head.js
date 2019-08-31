import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Flag from './Flag';

export default props => {
    return (
        <View style={StyleSheet.container}>
            <View styles={styles.flagContainer}>
                <TouchableOpacity
                    onPress={props.onFlagPress}
                    style={styles.flagButton}>
                    <Flag bigger />
                </TouchableOpacity>
                <Text style={styles.flags}>{props.flagsLeft}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={props.onNewGame}>
                <Text style={styles.buttonLabel}>Novo Jogo</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    flagContainer: {},
    flagButton: {},
    flags: {},
    button: {},
    buttonLabel: {},
});
