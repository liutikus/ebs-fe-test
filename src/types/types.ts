export interface Product {
    id: number, 
    image:string,
    title: string,
    category:string,
    description: string,
    price: number,
    rating : {
        rate: number,
        count: number
    }
}