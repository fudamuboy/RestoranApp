import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react';
import yelp from '../api/yelp';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function ResultatShow({ route }) {
    const [result, setResult] = useState(null);
    const id = route.params.id;

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);

    }

    useEffect(() => {
        getResult(id);
    }, []);
    if (!result) {
        return null;
    }

    // Utilisation d'images alternatives si le tableau `photos` est vide
    const photos = result.photos && result.photos.length > 0 ? result.photos : [result.image_url]
    return (
        <View>
            <Text style={styles.title} >{result.name}</Text>
            <Text style={styles.number}>{result.phone} </Text>
            <View style={styles.icon}>
                {
                    result.is_closed ? <AntDesign name="closecircleo" size={24} color="black" /> : <MaterialIcons name="delivery-dining" size={24} color="black" />
                }
            </View>



            <FlatList
                data={photos}
                renderItem={({ item }) => {
                    return <Image style={styles.images} source={{ uri: item }} />
                }} />
        </View>
    )
}

const styles = StyleSheet.create({
    images: {

        height: 180,
        margin: 10,
        borderRadius: 20,
    },
    title: {
        textAlign: 'center',
        marginVertical: 5,
        fontSize: 18,
    },
    number: {
        textAlign: 'center',
    },
    icon: {
        alignSelf: 'center',
    },
});