import { createContext, ReactNode, useState } from "react"
import { Product } from "../types/types"

interface CartItem extends Product {
    quantity: number
}

interface CartContextType {
    items: CartItem[],
    addToCart: (product:Product) => void,
    decreaseQuantity: (id: number) => void
    removeFromCart: (id: number) => void,
    clearCart: () =>void
}

export const CartContext = createContext<CartContextType | undefined>(undefined);


const CartProvider = ({children} : {children: ReactNode}) => {

    const [items, setItems] = useState<CartItem[]>([])

    const addToCart = (product: Product)=>{
        setItems (prevItems => {
            const exist = prevItems.find(item => item.id === product.id)
            if(exist){
                return prevItems.map(item=> item.id === product.id ?
                    {...item, quantity: item.quantity + 1}
                    : item
                ) 
            }

            return [...prevItems, { ...product, quantity: 1 }]
        })

    }

    const removeFromCart = (id: number)=>{
        setItems(prevItems =>prevItems.filter(item => item.id!== id ) )
    }

    const decreaseQuantity = (id: number)=>{
        setItems(prevItems =>
            prevItems.map(item =>
              item.id === id
                ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
                : item
            )
          );
    }

    const clearCart = () => setItems([])

  return (
    <CartContext.Provider value={{items, addToCart, removeFromCart, clearCart, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
