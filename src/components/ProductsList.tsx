import { Product } from "../types/types"
import Card from "./Card"

const ProductsList = ({products, filter, sort}: {products:Product[], filter:string, sort:'asc'|'desc'}) => {


   const  filtredProducts = filter? products.filter(product => product.category === filter) : products
   filtredProducts.sort((a,b)=> sort === 'asc' ? a.price-b.price : b.price- a.price)
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {filtredProducts.map(product=>(
        <Card
        key={product.id}
        product={product}
        />
      ))}
    </div>
  )
}

export default ProductsList
