// GridItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppColors } from '../../../../utils/AppColors';

const GridItem = ({ item }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.text}>{item.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        flex: 1,
        margin: 3,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: AppColors.pink60,
        borderRadius: 8,
        padding:5
    },
    text:{

        fontSize:12,
        fontWeight:'400',
        color:AppColors.white
    }
});

export default GridItem;
