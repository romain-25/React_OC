import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from './Components/Search'
import FilmDetail from './Components/FilmDetail';

function HomeScreen() {
  return (
    <View style={{ flex: 1}}>
      <Search/>
    </View>
  );
}

function Detail() {
  return (
    <View style={{ flex: 1}}>
        <FilmDetail/>
      </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Recherche"
        component={HomeScreen}
        options={{title: 'Recherche'}}
         />
         <Stack.Screen name="Detail"
         component={Detail}
         options={{title: "Détail"}}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
