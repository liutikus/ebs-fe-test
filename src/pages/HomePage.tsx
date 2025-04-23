import { useEffect, useState } from "react"
import { Product } from "../types/types"
import { fetchProduct } from "../services/productServices"
import Loading from "../components/Loading"

const HomePage = () => {

  const [products, setProducts]= useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(true)
    fetchProduct()
    .then(data => setProducts(data))
    .catch(console.error)
    .finally(()=> setLoading(true))
  },[])

  console.log(products)

  if(loading) return <Loading/>
  return (
    <div>
      
    </div>
  )
}

export default HomePage
