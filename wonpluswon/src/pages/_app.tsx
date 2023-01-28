import '@/styles/globals.css'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'
import Navbar from '../Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
       <Navbar/>
      <hr/>
       <Component {...pageProps} />
    </ChakraProvider> 
  )
  
  
}
