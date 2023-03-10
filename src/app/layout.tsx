"use client"

import './globals.css'

import { ThemeProvider } from "styled-components"
import {theme,GlobalStyles} from '../../theme'
import {Provider} from 'react-redux'
import userSlice from 'components/Redux/userSlice'
import store from 'components/Redux/store'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyles/>
            <Provider store={store}>
              {children}
            </Provider>
          
        </ThemeProvider>
        
      </body>
    </html>
  )
}
