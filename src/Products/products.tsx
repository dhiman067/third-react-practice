import { use, useState } from "react";
import type { Product as P, ProductType } from "../Tupe"
import Product from "../Product/Product";
import ProductDescription from "../Product/ProductDescription";

export interface ProductsProps {
    PromiseProduct: Promise<ProductType>
    
}

export default function Products({ PromiseProduct }: ProductsProps) {

    let [productDescription, setProductDescription] = useState<P[]>([])

    let handleProductdescription = (proDes:P) => {
        if (productDescription.includes(proDes)) {
            return
        }
        else {
            productDescription.pop()
            let newArr = [...productDescription, proDes]
            setProductDescription(newArr)
        }
    }

    let handleBackToproductsBtn=()=>{
        setProductDescription([])
    }

    let productsObj = use(PromiseProduct)
    let products = productsObj.products

    
    return (
        <div>
            <h1>hello hi bye bye</h1>
            {productDescription.length === 0 ? (
                <div className="flex flex-col items-center md:grid md:grid-cols-2 xl:grid xl:grid-cols-3 gap-4 m-auto xl:w-7xl pl-2.5">
                    {products.map(product => (
                        <Product
                            handleProductdescription={handleProductdescription}
                            key={product.id}
                            product={product}
                        ></Product>
                    ))}
                </div>
            ) : (
                productDescription.map(pro => <ProductDescription handleBackToproductsBtn={handleBackToproductsBtn} pro={pro}></ProductDescription>)
            )}
        </div>
    )

}