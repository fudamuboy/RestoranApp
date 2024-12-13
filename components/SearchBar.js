import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function SearchBar({ term, onTermChange, onTermSubmit }) {
    return (
        <View style={styles.AntDesign}>
            <AntDesign name="search1" size={30} color="black"
                style={styles.icon} />
            <TextInput style={styles.input}
                placeholder='Search'
                autoCorrect={false}
                autoCapitalize='none'
                value={term}
                onChange={onTermChange}
                onEndEditing={onTermSubmit} />
        </View>
    )
}

const styles = StyleSheet.create({
    AntDesign: {
        backgroundColor: 'lightgray',
        flexDirection: 'row',
        margin: 20,
        height: 50,
        alignItems: 'center',
        borderRadius: 50,
    },
    input: {
        fontSize: 18,
        flex: 1,
    },
    icon: {
        marginHorizontal: 10,
    },
})