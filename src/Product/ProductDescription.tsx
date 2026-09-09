// import type { Product } from "../Tupe"

// interface ProductDescriptionProps {
//     product: Product
//     // onBack: () => void
// }

// const ProductDescription = ({ product, }: ProductDescriptionProps) => {
//     const discountedPrice = product.price * (1 - product.discountPercentage / 100)

//     return (
        // <main className="min-h-screen bg-slate-950 px-4 py-6 text-slate-100 sm:px-8 lg:px-12">
        //     <div className="mx-auto max-w-6xl">
        //         <button  className="btn btn-ghost mb-8 gap-2 px-0 text-slate-300 hover:bg-transparent hover:text-white">
        //             <span aria-hidden="true">&larr;</span>
        //             Back to products
        //         </button>

        //         <div className="grid overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl lg:grid-cols-[1.05fr_0.95fr]">
        //             <section className="bg-slate-100 p-5 sm:p-8">
        //                 <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-white">
        //                     <span className="absolute left-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-950">
        //                         {product.category}
        //                     </span>
        //                     <img src={product.images[0] || product.thumbnail} alt={product.title} className="h-full w-full object-contain p-8" />
        //                 </div>
        //                 <div className="mt-4 grid grid-cols-4 gap-3">
        //                     {product.images.slice(0, 4).map((image, index) => (
        //                         <div key={image} className={`aspect-square overflow-hidden rounded-xl border-2 bg-white ${index === 0 ? 'border-amber-400' : 'border-transparent'}`}>
        //                             <img src={image} alt={`${product.title} view ${index + 1}`} className="h-full w-full object-contain p-2" />
        //                         </div>
        //                     ))}
        //                 </div>
        //             </section>

        //             <section className="flex flex-col justify-center p-6 sm:p-10">
        //                 <div className="mb-5 flex items-center justify-between gap-4">
        //                     <span className="text-sm font-medium uppercase tracking-[0.2em] text-amber-400">{product.brand}</span>
        //                     <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-300">{product.stock} in stock</span>
        //                 </div>
        //                 <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">{product.title}</h1>
        //                 <div className="mt-5 flex items-center gap-3">
        //                     <span className="text-amber-400">&#9733;</span>
        //                     <span className="font-semibold text-white">{product.rating}</span>
        //                     <span className="text-slate-400">Customer rating</span>
        //                 </div>
        //                 <p className="mt-7 leading-8 text-slate-300">{product.description}</p>

        //                 <div className="my-8 border-y border-slate-800 py-6">
        //                     <div className="flex items-end gap-3">
        //                         <span className="text-4xl font-bold text-white">${discountedPrice.toFixed(2)}</span>
        //                         <span className="mb-1 text-lg text-slate-500 line-through">${product.price.toFixed(2)}</span>
        //                         <span className="mb-1 rounded bg-rose-400/15 px-2 py-1 text-xs font-bold text-rose-300">-{product.discountPercentage}%</span>
        //                     </div>
        //                     <p className="mt-2 text-sm text-slate-400">Taxes calculated at checkout</p>
        //                 </div>

        //                 <div className="flex flex-col gap-3 sm:flex-row">
        //                     <button className="btn flex-1 border-0 bg-amber-400 text-slate-950 hover:bg-amber-300">Add to cart</button>
        //                     <button className="btn btn-outline flex-1 border-slate-600 text-slate-200 hover:border-white hover:bg-white hover:text-slate-950">Buy now</button>
        //                 </div>

        //                 <div className="mt-8 flex flex-wrap gap-2">
        //                     {product.tags.map((tag) => (
        //                         <span key={tag} className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400">#{tag}</span>
        //                     ))}
        //                 </div>
        //             </section>
        //         </div>
        //     </div>
        // </main>
//     );
// };

// export default ProductDescription;



import type { Product } from "../Tupe"
import { useState, type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";

interface ProductDescriptionProps {
    pro: Product
    handleBackToproductsBtn: () => void
    coins:number
    setCoins: Dispatch<SetStateAction<number>>;
}

const ProductDescription = ({ pro, handleBackToproductsBtn,coins,setCoins }: ProductDescriptionProps) => {
    const discountedPrice = pro.price * (1 - pro.discountPercentage / 100)
     const [cartBtn, setCartBtn] = useState("Buy Now")
      let handleCartBtn = (value: "Buy Now" | "Purchased!") => {
        if (discountedPrice <coins) {
            setCartBtn(value)
            let newAvailableCoins = (coins - discountedPrice)
            setCoins(Number(newAvailableCoins.toFixed(2)))
            toast.success(`${pro.title} Purchased Successfully`)
        }
        else{
            toast.error("Not Enough Coins")
        }

    }
    return (
        <main className="min-h-screen bg-slate-950 px-4 py-6 text-slate-100 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-6xl">
                <button onClick={handleBackToproductsBtn} className="btn btn-ghost mb-8 gap-2 px-0 text-slate-300 hover:bg-transparent hover:text-white">
                    <span aria-hidden="true">&larr;</span>
                    Back to products
                </button>

                <div className="grid overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl lg:grid-cols-[1.05fr_0.95fr]">
                    <section className="bg-slate-100 p-5 sm:p-8">
                        <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-white">
                            <span className="absolute left-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-950">
                                {pro.category}
                            </span>
                            <img src={pro.images[0] || pro.thumbnail} alt={pro.title} className="h-full w-full object-contain p-8" />
                        </div>
                        <div className="mt-4 grid grid-cols-4 gap-3">
                            {pro.images.slice(0, 4).map((image, index) => (
                                <div key={image} className={`aspect-square overflow-hidden rounded-xl border-2 bg-white ${index === 0 ? 'border-amber-400' : 'border-transparent'}`}>
                                    <img src={image} alt={`${pro.title} view ${index + 1}`} className="h-full w-full object-contain p-2" />
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="flex flex-col justify-center p-6 sm:p-10">
                        <div className="mb-5 flex items-center justify-between gap-4">
                            <span className="text-sm font-medium uppercase tracking-[0.2em] text-amber-400">{pro.brand}</span>
                            <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-300">{pro.stock} in stock</span>
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">{pro.title}</h1>
                        <div className="mt-5 flex items-center gap-3">
                            <span className="text-amber-400">&#9733;</span>
                            <span className="font-semibold text-white">{pro.rating}</span>
                            <span className="text-slate-400">Customer rating</span>
                        </div>
                        <p className="mt-7 leading-8 text-slate-300">{pro.description}</p>

                        <div className="my-8 border-y border-slate-800 py-6">
                            <div className="flex items-end gap-3">
                                <span className="text-4xl font-bold text-white">${discountedPrice.toFixed(2)}</span>
                                <span className="mb-1 text-lg text-slate-500 line-through">${pro.price.toFixed(2)}</span>
                                <span className="mb-1 rounded bg-rose-400/15 px-2 py-1 text-xs font-bold text-rose-300">-{pro.discountPercentage}%</span>
                            </div>
                            <p className="mt-2 text-sm text-slate-400">Taxes calculated at checkout</p>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row">
                            <button className="btn flex-1 border-0 bg-slate-900 text-white hover:bg-amber-300">Add to cart</button>
                            <button onClick={() => handleCartBtn("Purchased!")}
                        disabled={cartBtn === "Buy Now" ? false : true}
                        className={`btn flex-1 border-0 ${cartBtn === "Buy Now" ? `bg-amber-400 text-slate-950 ` : `bg-white text-cyan-200 `} text-sm font-semibold hover:bg-amber-300`}>
                        {cartBtn}
                    </button>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-2">
                            {pro.tags.map((tag) => (
                                <span key={tag} className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400">#{tag}</span>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default ProductDescription;