import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Container,
} from "@chakra-ui/react"

import { Route, Routes } from 'react-router-dom'
import Home from './home/home'
import Person from './person/person'

export const App = () => (
  <>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="person/:personId" element={<Person />} />
    </Routes>


  </>

)
