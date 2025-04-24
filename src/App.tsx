import { HashRouter as Router, Routes, Route } from "react-router-dom"
import CartProvider from "./context/CartContext"
import MainLayout from "./layout/MainLayout"
import HomePage from "./pages/HomePage"
import CartPage from "./pages/CartPage"


function App() {

  return (
  <CartProvider>
    <Router>
      <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="cart" element={<CartPage />} />
          </Route>
          </Routes>
    </Router>
  </CartProvider>
  )
}

export default App
