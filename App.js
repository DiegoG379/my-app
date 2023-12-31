import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts';
import HomeScreen from './src/screens/HomeScreen';
import IndividualTravelScreen from './src/screens/IndividualTravelScreen';
import EditTravelInfoScreen from './src/screens/EditTravelInfoScreen';
import ProductListScreen from './src/screens/ProductListScreen';
import PackingListScreen from './src/screens/PackingListScreen';

const Stack = createStackNavigator();

const App = () => {
  const [fontLoaded] = useFonts(fonts);
  if (!fontLoaded) return null;

  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="IndividualTravel" component={IndividualTravelScreen} />
        <Stack.Screen name="EditTravelInfoScreen" component={EditTravelInfoScreen} />
        <Stack.Screen name="ProductList" component={ProductListScreen} />
        <Stack.Screen name="PackingList" component={PackingListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
