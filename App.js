import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts';
import HomeScreen from './src/screens/HomeScreen';
import EditTravelInfo from './src/components/EditTravelInfo';
import IndividualTravelScreen from './src/screens/IndividualTravelScreen';

const Stack = createStackNavigator();

const App = () => {
  const [fontLoaded] = useFonts(fonts);
  if (!fontLoaded) return null;

  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EditTravelInfo" component={EditTravelInfo} />
        <Stack.Screen name="IndividualTravel" component={IndividualTravelScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;