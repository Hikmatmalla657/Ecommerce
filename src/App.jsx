import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'
import Productspage from './pages/Productspage'
import CartProvider from './context/CartContext'
import Cartpage from './pages/Cartpage'
import SingleProductPage from './pages/SingleProductPage'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
    <AuthProvider>
    <CartProvider>  
  <Routes>

    <Route path='/' element={<MainLayout />} >

      <Route index element={<Homepage/>}/>
      <Route path ='cart' element={<Cartpage/>} />
      <Route path='products' element={<Productspage/>} />
      <Route path='products/:id' element={<SingleProductPage/>} />
      <Route path='login' element={<LoginPage/>} />
      <Route path='signup' element={<LoginPage mode="signup" />} />
      
  </Route>

  <Route path='*' element={<NotFound/>}/>

  </Routes>

  
  </CartProvider>
  </AuthProvider>
  </ThemeProvider>
  )
}

export default App
