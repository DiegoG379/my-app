import React from 'react';
import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts';
import Home from './src/screens/Home';

const App = () => {
  const [fontLoaded] = useFonts(fonts);
  if(!fontLoaded) return null;

  return (
    <>
      <Home/>
    </>
  );
}

export default App;