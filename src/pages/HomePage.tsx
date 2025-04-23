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

  console.log(filter, sort)

  if(loading) return <Loading/>
  if(error) return <ErrorMes message={error}/>

  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div className="m-10">
  <div className="flex gap-4 mb-4">
  <select
    value={filter}
    onChange={e => setFilter(e.target.value)}
    className="px-4 py-2 rounded-md border cursor-pointer border-[#ECE5F0] capitalize text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#362166] focus:border-[#362166]"
  >
    <option value="">All</option>
    {categories.map(c => (
      <option key={c}>{c}</option>
    ))}
  </select>

  <select
    value={sort}
    onChange={e => setSort(e.target.value as any)}
    className="px-4 py-2 rounded-md border border-[#ECE5F0] cursor-pointer text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#362166] focus:border-[#362166]"
  >
    <option value="asc">Price: Low to High</option>
    <option value="desc">Price: High to Low</option>

  </select>
</div>
      
      <ProductsList products={products} filter={filter} sort={sort}/>
    </div>
  )
}

export default HomePage
