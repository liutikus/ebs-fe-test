import { useEffect, useState } from "react"
import { Product } from "../types/types"
import { fetchProduct } from "../services/productServices"
import Loading from "../components/Loading"
import ErrorMes from "../components/ErrorMes"
import ProductsList from "../components/ProductsList"

const HomePage = () => {

  const [products, setProducts]= useState<Product[]>([])
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState<'asc'|'desc'>('asc');
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(()=>{
    setLoading(true)
    fetchProduct()
    .then(data => setProducts(data))
    .catch(err => setError(err.message))
    .finally(()=> setLoading(false))
  },[])

  console.log(products)

  if(loading) return <Loading/>
  if(error) return <ErrorMes message={error}/>

  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div className="m-10">
  
      
      <ProductsList products={products}/>
    </div>
  )
}

export default HomePage
