import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import 'react-native-gesture-handler'
import { Routes } from './routes'
import { ThemeContext } from './context/theme'
import { default as customTheme } from '../custom-theme.json'
import { ContextProvider } from './context'
import { Client } from '@stomp/stompjs';

const App = () => {
  const [theme, setTheme] = React.useState({ ...eva.light, ...customTheme })
  const client = new Client();

  // useEffect(() => {
  //   client.configure({
  //     brokerURL: 'wss://clam.rmq.cloudamqp.com/ws',
  //     connectHeaders: {
  //       login: 'oshgkrzg',
  //       passcode: 'UGeGl_ODOBs97UbTqKd00_CfN0oQRUsw',
  //     },
  //     debug: function (str) {
  //       console.log('Client Debug: ' + str);
  //     },
  //     reconnectDelay: 0,
  //     heartbeatIncoming: 4000,
  //     heartbeatOutgoing: 4000,
  //     forceBinaryWSFrames: true,
  //     appendMissingNULLonIncoming: true,
  //     logRawCommunication: true,
  //   })

  //   client.onConnect = (frame) => {
  //     // Do something, all subscribes must be done is this callback
  //     // This is needed because this will be executed after a (re)connect
  //     console.log('Conectado');
  //   }

  //   client.onWebSocketError = (event: Event) => {
  //     console.log('WebSocket Error: ' + event);
  //   }

  //   client.onStompError = (frame) => {
  //     // Will be invoked in case of error encountered at Broker
  //     // Bad login/passcode typically will cause an error
  //     // Complaint brokers will set `message` header with a brief message. Body may contain details.
  //     // Compliant brokers will terminate the connection after any error
  //     console.log('Broker reported error: ' + frame.headers['message'])
  //     console.log('Additional details: ' + frame.body)
  //   }

  //   client.activate()
  // }, [])

  const toggleTheme = () => {
    const nextTheme =
      theme === { ...eva.light, ...customTheme }
        ? { ...eva.dark, ...customTheme }
        : { ...eva.light, ...customTheme }
    setTheme(nextTheme)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ApplicationProvider {...eva} theme={theme}>
          <ContextProvider>
            <Routes />
          </ContextProvider>
        </ApplicationProvider>
      </ThemeContext.Provider>
    </SafeAreaView>
  )
}

export default App
