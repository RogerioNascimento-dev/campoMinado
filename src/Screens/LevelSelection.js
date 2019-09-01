import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default props => {
    return (
        <Modal
            onRequestClose={props.onCancel}
            visible={props.isVisible}
            animationType="slide"
            transparent={true}>
            <View style={styles.frame}>
                <View style={styles.container}>
                    <View style={styles.containerTitle}>
                        <Text style={styles.title}>
                            Selecione o nível de dificuldade
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={[styles.button, styles.bgEasy]}
                        onPress={() => props.onLevelSelected(0.1)}>
                        <Icon
                            name="sentiment-very-satisfied"
                            size={30}
                            color="#FFF"
                        />
                        <Text style={styles.buttonLabel}>Fácil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.bgNormal]}
                        onPress={() => props.onLevelSelected(0.2)}>
                        <Icon
                            name="sentiment-satisfied"
                            size={30}
                            color="#FFF"
                        />
                        <Text style={styles.buttonLabel}>Intermediário </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.bgHard]}
                        onPress={() => props.onLevelSelected(0.3)}>
                        <Icon
                            name="sentiment-very-dissatisfied"
                            size={30}
                            color="#FFF"
                        />
                        <Text style={styles.buttonLabel}>Difícil</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0, 0, 0.6)',
    },

    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 15,
    },
    title: {
        fontSize: 20,
        //fontWeight: 'bold',
    },
    containerTitle: {
        width: '100%',
        backgroundColor: '#ccc',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,.5)',
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        marginTop: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        borderWidth: 1,
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333',
    },
    buttonLabel: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold',
        marginLeft: 10,
    },
    bgEasy: {
        backgroundColor: '#46b65d',
    },
    bgNormal: {
        backgroundColor: '#2765F7',
    },
    bgHard: {
        backgroundColor: '#F26337',
    },
});
