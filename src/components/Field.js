import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import params from '../params';
import Mine from './Mine';
import Flag from './Flag';

export default props => {
    const {mined, opened, nearMines, exploded, flaged} = props;

    const styleField = [styles.field];
    if (opened) {
        styleField.push(styles.opened);
    }
    if (exploded) {
        styleField.push(styles.exploded);
    }
    if (!opened && !exploded) {
        styleField.push(styles.regular);
    }
    if (flaged) {
        styleField.push(styles.flaged);
    }

    let color = null;
    if (nearMines > 0) {
        color = nearMines == 1 ? '#2A28D7' : null;
        color = nearMines == 2 ? '#2B520F' : null;
        color = nearMines > 2 && nearMines < 6 ? '#F9060A' : null;
        color = nearMines >= 6 ? '#F221A9' : null;
    }

    return (
        <View style={styleField}>
            {!mined && opened && nearMines > 0 ? (
                <Text style={[styles.label, {color: color}]}>{nearMines} </Text>
            ) : (
                false
            )}
            {mined && opened ? <Mine /> : false}
            {flaged && !opened ? <Flag /> : false}
        </View>
    );
};

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize,
    },

    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333',
    },

    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize,
    },
    exploded: {
        backgroundColor: 'red',
        borderColor: 'red',
    },
});
