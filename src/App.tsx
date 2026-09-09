
import { Suspense, useState } from 'react'
import './App.css'
import type {  ProductType } from './Tupe'
import Products from './Products/products'
import Navbar from './Navbar'



function App() {
 
let ProductFetch = async():Promise<ProductType>=>{
      let res = await fetch("https://dummyjson.com/products")
      let data = res.json()
      return data
    }
    const [coins, setCoins]=useState(600)
    let [PromiseProduct]= useState(()=>ProductFetch())
  return (
    
    <>
    <Navbar coins={coins}></Navbar>
    
   <Suspense fallback={<h3>Loading.....</h3>}>
        <Products coins={coins} setCoins={setCoins} PromiseProduct={PromiseProduct} />
      </Suspense>
    </>
  )
}

export default App
