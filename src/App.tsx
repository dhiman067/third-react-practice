
import { Suspense } from 'react'
import './App.css'
import type {  ProductType } from './Tupe'
import Products from './Products/products'



function App() {
 
let PromiseProduct = async():Promise<ProductType>=>{
      let res = await fetch("https://dummyjson.com/products")
      let data = res.json()
      return data
    }
  return (
    
    <>
      
    
   <Suspense fallback={<h3>Loading.....</h3>}>
        <Products PromiseProduct={PromiseProduct()} />
      </Suspense>
    </>
  )
}

export default App
