import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Flag from './Flag';

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <TouchableOpacity
                    onPress={props.onFlagPress}
                    style={styles.flagButton}>
                    <Flag bigger />
                </TouchableOpacity>
                <Text style={styles.flagsLeft}> = {props.flagsLeft}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={props.onNewGame}>
                <Text style={styles.buttonLabel}>Novo Jogo</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#AAA',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    flagContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    flagButton: {
        minWidth: 30,
        marginTop: 5,
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    button: {
        backgroundColor: '#999',
        padding: 5,
        borderWidth: 2,
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333',
    },
    buttonLabel: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold',
    },
});
