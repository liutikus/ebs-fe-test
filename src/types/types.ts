export interface Product {
    id: number, 
    title: string,
    category:string,
    description: string,
    price: number,
    rating : {
        rate: number,
        count: number
    }
}