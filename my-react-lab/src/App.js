import React from 'react'
import './App.css'
import Counter from './components/counter'
import Calculator from './components/calculator'
import LoginForm from './components/loginform'
import ShopingCart from './components/shopingcart'

const App = () => {
  return (
    <div>
      <Counter/>
      <Calculator/>
      <LoginForm/>
      <ShopingCart/>
    </div>
  )
}

export default App