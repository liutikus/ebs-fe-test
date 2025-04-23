import CartProvider from "./context/CartContext"
import MainLayout from "./layout/MainLayout"
import HomePage from "./pages/HomePage"


function App() {

  return (
  <CartProvider>
    <MainLayout>
      <HomePage/>
    </MainLayout>
  </CartProvider>
  )
}

export default App
