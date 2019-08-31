import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar, Alert} from 'react-native';
import params from './src/params';
import MineField from './src/components/MineField';
import {
    createMineBoard,
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines,
    invertFlag,
    flagedUsed,
} from './src/functions';

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
            won: false,
            lost: false,
        };
    };

    onOpenField = (row, column) => {
        const board = cloneBoard(this.state.board);
        openField(board, row, column);
        const lost = hadExplosion(board);
        const won = wonGame(board);

        if (lost) {
            showMines(board);
            Alert.alert('Perdeeeeu!', 'Que Buuuuuurro!');
        }

        if (won) {
            Alert.alert('Venceu!', 'Parabéns você ganhou');
        }

        this.setState({board, lost, won});
    };

    onSelectField = (row, column) => {
        const board = cloneBoard(this.state.board);
        invertFlag(board, row, column);
        const won = wonGame(board);
        if (won) {
            Alert.alert('Venceu!', 'Parabéns você ganhou');
        }
        this.setState({board, won});
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
                        <MineField
                            board={this.state.board}
                            onOpenField={this.onOpenField}
                            onSelectField={this.onSelectField}
                        />
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
