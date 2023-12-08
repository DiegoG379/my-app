import React from 'react';
import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts';
import ProductListScreen from './src/screens/ProductListScreen';
import PackingListScreen from './src/screens/PackingListScreen';


const App = () => {
  const [fontLoaded] = useFonts(fonts);
  if(!fontLoaded) return null;

  return (
    <>
    <ProductListScreen/>
    </>
  );
}

export default App;