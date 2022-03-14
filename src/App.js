import React from 'react'
import Catalog from './components/Catalog'
import Header from './components/Header'
import History from './components/History'
import NewProduct from './components/NewProduct'
import LastProduct from './components/LastProduct'
import Number from './components/Number'
import Partners from './components/Partners'

const App = () => {
  return (
    <>
      <Header />
      <Catalog />
      <NewProduct />
      <History />
      <LastProduct />
      <Number />
      <Partners />

    
    </>
  )
}

export default App