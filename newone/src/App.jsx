import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Platform from './components/Platform/Platform'
import Features from './components/Features/Features'
import Hukk from './components/Hukk/Hukk'
import Moree from './components/Moree/Moree'
import Fsec from './components/Fsec/Fsec'
import Pricing from './components/Pricing/Pricing'
import Us from './components/Us/Us'
import Bfooter from './components/Bfooter/Bfooter'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    <Header>
        <Navbar />
        <Banner />
    </Header>
    <Platform />
    <Features />
    <Hukk />
    <Moree/>
    <Fsec />
    <Pricing />
    <Us />
    <Bfooter />
    <Footer />
    </>
  

  )
}

export default App
