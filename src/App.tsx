import React from 'react'
import { SafeAreaView } from 'react-native'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import 'react-native-gesture-handler';
import { Routes } from './Routes'
import { ThemeContext } from './Context/theme';
import { default as customTheme } from '../custom-theme.json'

const App = () => {
  const [theme, setTheme] = React.useState({ ...eva.light, ...customTheme });

  const toggleTheme = () => {
    const nextTheme = theme === { ...eva.light, ...customTheme } ? { ...eva.dark, ...customTheme } : { ...eva.light, ...customTheme };
    setTheme(nextTheme);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ApplicationProvider {...eva} theme={theme}>
          <Routes />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </SafeAreaView>
  )
}

export default App
