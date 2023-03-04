"use client"

import './globals.css'

import { ThemeProvider } from "styled-components"
import {theme,GlobalStyles} from '../../../theme'
import {Provider} from 'react-redux'
import store from 'components/Redux/store'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyles/>
              {children}
          
        </ThemeProvider>
        
      </body>
    </html>
  )
}
