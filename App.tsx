import { Dispatch, SetStateAction, useState } from 'react'
import {Slide1} from './src/screens/Slide1'
import { Slide2 } from './src/screens/Slide2'
import { Slide3 } from './src/screens/Slide3'
import { Slide4 } from './src/screens/Slide4'

export interface Ipagina {
  setPageI: Dispatch<SetStateAction<number>>
}

export default function App() {
  const[page, setPage] = useState(1)
  if (page == 1) {
    return <Slide1 setPageI={setPage} />
  }else if (page == 2) {
    return <Slide2 setPageI={setPage} />
  }else if (page == 3) {
    return <Slide3 setPageI={setPage} />
  }else if (page == 4) {
    return <Slide4 setPageI={setPage} />
  }
  }

