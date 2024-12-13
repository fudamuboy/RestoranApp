import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RechercheEkran from './screens/RechercheEkran';
import ResultatShow from './screens/ResultatShow';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitle: 'RESTORAN APP' }}>

        <Stack.Screen name="Search" component={RechercheEkran} />
        <Stack.Screen name="Show" component={ResultatShow} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
