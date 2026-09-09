import { useState } from "react"
import type { Product } from "../Tupe"
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";


export interface ProductProps {
    product: Product
    handleProductdescription: (product: Product) => void
    coins: number
    setCoins: Dispatch<SetStateAction<number>>;
}

export default function Product({ product, handleProductdescription, coins, setCoins }: ProductProps) {
    const discountedPrice = product.price * (1 - product.discountPercentage / 100)
    const [cartBtn, setCartBtn] = useState("Buy Now")

    let handleCartBtn = (value: "Buy Now" | "Purchased!") => {
        if (discountedPrice <coins) {
            setCartBtn(value)
            let newAvailableCoins = (coins - discountedPrice)
            setCoins(Number(newAvailableCoins.toFixed(2)))
            toast.success(`${product.title} Purchased Successfully`)
        }
        else{
            toast.error("Not Enough Coins")
        }

    }

    return (
        <article className="group relative w-full max-w-sm overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900 shadow-[0_20px_60px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_72px_rgba(15,23,42,0.45)]">
            <div className="absolute right-4 top-4 z-10 rounded-full bg-amber-400 px-3 py-1 text-sm font-bold text-slate-950 shadow-sm">
                {product.rating.toFixed(1)}
            </div>

            <div className="bg-slate-100 p-5">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="h-64 w-full rounded-2xl object-cover transition duration-500 group-hover:scale-105"
                />
            </div>

            <div className="space-y-4 p-5">
                <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-amber-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-300">
                        {product.category}
                    </span>
                    <span className="text-xs text-slate-400">{product.stock} in stock</span>
                </div>

                <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{product.brand}</p>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">{product.title}</h2>
                </div>

                <div className="flex items-end gap-2">
                    <span className="text-2xl font-bold text-white">${discountedPrice.toFixed(2)}</span>
                    <span className="pb-1 text-sm text-slate-500 line-through">${product.price.toFixed(2)}</span>
                </div>

                <p className="line-clamp-2 text-sm leading-6 text-slate-300">{product.description}</p>

                <div className="flex gap-3 pt-2">
                    <button onClick={() => handleCartBtn("Purchased!")}
                        disabled={cartBtn === "Buy Now" ? false : true}
                        className={`btn flex-1 border-0 ${cartBtn === "Buy Now" ? `bg-amber-400 text-slate-950 ` : `bg-white text-cyan-200 `} text-sm font-semibold hover:bg-amber-300`}>
                        {cartBtn}
                    </button>
                    <button
                        onClick={() => handleProductdescription(product)}
                        className="btn flex-1 border border-slate-700 bg-transparent text-sm font-semibold text-slate-200 hover:border-white hover:bg-white hover:text-slate-950"
                    >
                        View Product
                    </button>
                </div>
            </div>
        </article>
    )
}