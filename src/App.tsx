import 'react-native-gesture-handler'
import React from 'react'
import { SafeAreaView } from 'react-native'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { Routes } from './routes/routes'
import { ContextProvider } from './components/ContextProvider'
import { useTheme } from './hooks'

const App = () => {
  const { theme } = useTheme()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <IconRegistry icons={EvaIconsPack} />
      <ContextProvider>
        <ApplicationProvider {...eva} theme={theme}>
          <Routes />
        </ApplicationProvider>
      </ContextProvider>
    </SafeAreaView>
  )
}

export default App
