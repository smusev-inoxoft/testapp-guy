
type Feed = {
    limit: number,
    products: Array<Product>
};

type Product = {
    brand: string,
    category: string,
    description: string,
    discountPercentage: number,
    id: number,
    images: [],
    price: number,
    rating: number,
    stock: number,
    thumbnail: string,
    title: string,
}

export type {
    Feed, Product
}