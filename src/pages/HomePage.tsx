import { useEffect, useState } from "react"
import { Product } from "../types/types"
import { fetchProduct } from "../services/productServices"
import Loading from "../components/Loading"
import ErrorMes from "../components/ErrorMes"

const HomePage = () => {

  const [products, setProducts]= useState<Product[]>([])
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

  
  return (
    <div>
      
    </div>
  )
}

export default HomePage
