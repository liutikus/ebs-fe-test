import { useCart } from "../hooks/useCart"
import { formatPrice } from "../utils/formatPrice"
import Button from "./Button"
import TotalPrice from "./TotalPrice"



const CartList = () => {

    const {items,removeFromCart,addToCart, decreaseQuantity} = useCart()

    if(items.length<=0){
        return <div className="flex items-center justify-center h-screen w-screen ">
            <p className="text-2xl font-bold text-[#362166] border-2 rounded-sm p-2">Your Cart is Empty</p>
        </div>
    }

  return (
    <div>

    <div className="shadow-xl ">
        {items.map(item=>(
            <div 
            key={item.id}
            className="mt-5 flex shadow-sm ">

                <img src={item.image} alt={item.title} 
                className="h-25"
                />
                <div className="mx-2">
                <p>{item.title}</p>
                <p className="text-xl font-bold">{formatPrice(item.price)}</p>
                <div className="flex">
                <div className="mr-20 mb-5">
                    <button className="bg-[#362166] cursor-pointer text-xl w-7 text-[#ECE5F0] px-2 rounded-full
                    hover:bg-[#ECE5F0]
                    hover:text-[#362166]
                    "
                    onClick={()=>addToCart(item)}
                    >
                        +
                    </button>
                    <p className="inline p-2 text-xl font-semibold">{item.quantity}</p>
                    <button className="bg-[#362166] text-xl w-7 cursor-pointer text-[#ECE5F0] px-2 rounded-full
                    hover:bg-[#ECE5F0]
                    hover:text-[#362166]
                    "
                    onClick={()=>decreaseQuantity(item.id)}
                    
                    >
                      - 
                    </button>
                </div>
                <Button label='Remove From Cart' handleClick={()=> removeFromCart(item.id)}/>
                </div>
                </div>
           
          
            </div>
        ))}
    </div>
        <div className="flex items-center justify-center mt-10 shadow-xl w-screen p-10">
       <TotalPrice/>

        </div>

    </div>
  )
}

export default CartList
