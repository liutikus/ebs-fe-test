import { Product } from "../types/types"

export async function fetchProduct(): Promise<Product[]> {
    const res = await fetch("https://fakestoreapi.com/products")
    if(!res.ok) throw new Error ('Failed to fetch data')
        return await res.json()
}