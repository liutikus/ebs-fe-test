import { Product } from "../types/types"
import Card from "./Card"

const ProductsList = ({products}: {products:Product[]}) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {products.map(product=>(
        <Card
        key={product.id}
        product={product}
        />
      ))}
    </div>
  )
}

export default ProductsList
