import { BrowserRouter, Routes, Route } from "react-router-dom"
import CartProvider from "./context/CartContext"
import MainLayout from "./layout/MainLayout"
import HomePage from "./pages/HomePage"
import CartPage from "./pages/CartPage"


function App() {

  return (
  <CartProvider>
    <BrowserRouter>
      <MainLayout>
      <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
      </MainLayout>
    
    </BrowserRouter>
  </CartProvider>
  )
}

export default App
