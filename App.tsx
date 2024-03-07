import { Dispatch, SetStateAction, useState } from 'react'
import {Slide1} from './src/screens/Slide1'

export interface Ipagina {
  setPageI: Dispatch<SetStateAction<number>>
}

export default function App() {
  const[page, setPageI] = useState(1)
  return (
    <Slide1  setPageI={setPageI}/>
  );
}

