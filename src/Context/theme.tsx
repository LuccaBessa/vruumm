import React from 'react'
import * as eva from '@eva-design/eva'

export const ThemeContext = React.createContext({
  theme: eva.light,
  toggleTheme: () => { },
});