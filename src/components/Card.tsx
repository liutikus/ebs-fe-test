import { useCart } from "../hooks/useCart"
import { Product } from "../types/types"
import { formatPrice } from "../utils/formatPrice"
import Button from "./Button"
import StarRating from "./StarRating"

const Card = ({product}: {product: Product}) => {

    const {items, addToCart} = useCart()

    console.log(items)
  return (
    <div className=" p-4 rounded-lg flex flex-col shadow hover:shadow-xl transition-shadow duration-300">
      <img className="object-contain h-40" src={product.image} alt={product.title} />
      <p className=" font-semibold text-[#362166]">{product.title}</p>
      <p className="text-sm text-[#636B61] capitalize">{product.category}</p>
      <div className="flex">
      <StarRating rating={product.rating.rate}/>
        <p className="text-sm text-[#636B61] mx-2">({product.rating.count})</p>
      </div>
      <p className="text-lg font-bold ">{formatPrice(product.price)} </p>
      <div className="mt-2">
            <Button
            handleClick={()=>addToCart(product)}
             label='Add to Cart'
             />
      </div>
    </div>
  )
}

export default Card
