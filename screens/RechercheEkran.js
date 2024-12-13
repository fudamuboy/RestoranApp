import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultList from '../components/ResultList';

export default function RechercheEkran() {
    const [searchApi, results, errorMsg] = useResults();
    const [term, setTerm] = useState('');
    // console.log(results);

    const filterResultsByPrice = (price) => {
        return results.filter((result) => {
            return result.price === price;
        })
    }
    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)} />
            {errorMsg ? <Text>{errorMsg} </Text> : null}
            {results.length == 0 ? <></> : <>
                <ResultList title='Ucuz Restoranlar' results={filterResultsByPrice('₺')} />
                <ResultList title='Uygunn Restoranlar' results={filterResultsByPrice('₺₺')} />
                <ResultList title='Pahali Restoranlar' results={filterResultsByPrice('₺₺₺')} /></>}


        </View>
        // C'est pour afficher d'abord cme un liste que tu vois avec restoran moins,cher et plus couteux surtout les 
        // En haut on a utilise la const pour les filtrer par prix à l'aide de données obtenues via un hook personnalisé (useResults) kon autlise en arriere
    )
}

const styles = StyleSheet.create({})