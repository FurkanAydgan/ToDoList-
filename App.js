
import React, { useState } from 'react';
import Home from './screens/home';
import { AppLoading } from 'expo';
import * as font from 'expo-font';
import Navigator from './routes/drawer';



const getFonts = () => font.loadAsync({

  'Fondamento-Regular': require('./assets/fonts/Fondamento-Regular.ttf'),
  'Fondamento-Italic': require('./assets/fonts/Fondamento-Italic.ttf')
});

export default function App() {

  const [Fontsloaded, setFontsloaded] = useState(false);

 
  if (Fontsloaded) {
    return (
       <Navigator/>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsloaded(true)}
      />
    )
  }

}

