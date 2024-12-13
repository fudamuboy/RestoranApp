import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail';
import { useNavigation } from '@react-navigation/native';
useNavigation

export default function ResultList({ title, results }) {

    const navigation = useNavigation();
    console.log(results);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title} </Text>
            <FlatList
                data={results}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <ResultDetail result={item} />
                        </TouchableOpacity>
                    )
                }} />
        </View>
    )
}

// La partie du FlatList pour montrer comme ca sera afficher a l'ecran avec les proprietes et autres 

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    title: {
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 18,
    },
})