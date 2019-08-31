import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import params from './src/params';
import MineField from './src/components/MineField';
import {createMineBoard} from './src/functions';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = this.createState();
    }

    minesAmount = () => {
        const cols = params.getCollunsAmount();
        const rows = params.getRowsAmount();
        return Math.ceil(cols * rows * params.difficultLevel);
    };

    createState = () => {
        const cols = params.getCollunsAmount();
        const rows = params.getRowsAmount();
        return {
            board: createMineBoard(rows, cols, this.minesAmount()),
        };
    };

    render() {
        return (
            <>
                <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
                <View style={styles.container}>
                    <Text style={styles.welcome}>Tamanho da grade</Text>
                    <Text style={styles.welcome}>
                        {params.getRowsAmount()}X{params.getCollunsAmount()}
                    </Text>
                    <View style={styles.board}>
                        <MineField board={this.state.board} />
                    </View>
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    board: {
        backgroundColor: '#AAA',
        textAlign: 'center',
    },
});
