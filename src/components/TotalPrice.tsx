import { useCart } from '../hooks/useCart'
import { formatPrice } from '../utils/formatPrice'
import Button from './Button';


const TotalPrice = () => {

const {items, clearCart} = useCart()

const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div >
        <h1 className='text-3xl font-bold text-[#362166] mb-5'>Summary</h1>
        {items.map(item=>(
            <div key={item.id} className='border-b-1 border-[#362166]'>
                <p>{item.title}</p>
                <div className='flex'>

                <p className='font-bold'>{formatPrice(item.price)}</p>
                <p className='font-bold text-[#362166]'> x{item.quantity}</p>
                </div>
            </div>
        ))}

        <div className='my-2 flex justify-between'>
            <h2 className='text-xl font-semibold'>Total:</h2>
            <p className='text-xl font-semibold text-[#362166]'>{formatPrice(totalPrice)}</p>
        </div>
        <div className="flex justify-between">

        <Button label='Empty Cart' handleClick={()=> clearCart()}/>
        <Button label='Checkout' handleClick={()=> null}/>
        </div>
    </div>
  )
}

export default TotalPrice
