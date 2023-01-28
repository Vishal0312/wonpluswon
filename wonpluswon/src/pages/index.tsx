
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Heading } from '@chakra-ui/react'
import Home from './home'
const inter = Inter({ subsets: ['latin'] })

export default function index() {
  return (
    <>
    <Home/>     
    </>
  )
}
