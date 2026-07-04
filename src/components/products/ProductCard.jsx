import React, { useState } from 'react'

import { useCart } from '../../hooks/useCart';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';


function ProductCard({product}) {
 const [isAdded, setIsAdded] = useState(false)

const { addToCart, isInCart, removeFromCart } = useCart();
const { darkMode } = useTheme();

const rating = product.rating || { rate: 0, count: 0 };
const isCart = isInCart(product.id);


function addProductToCart() {

addToCart(product);

handleAddCart();

}


 function removeProductFromCart() {

removeFromCart(product.id);

 }


const handleAddCart = () => {

 setIsAdded(true)

 setTimeout(() => setIsAdded(false), 2000)

}


 return (
<Link to={`/products/${product.id}`} className={`rounded-lg shadow hover:shadow-xl transition-all duration-300 p-3 md:p-4 transform hover:-translate-y-1 ${darkMode ? 'bg-slate-900 border border-slate-800' : 'bg-white'}`}>

{/* Image */}

<div className={`relative overflow-hidden h-40 md:h-48 rounded-lg mb-3 md:mb-4 flex items-center justify-center ${darkMode ? 'bg-slate-800' : 'bg-gray-100'}`}>

<img 

src={product.image} 

 alt={product.title} 

 className="max-w-full max-h-full object-contain"

 />

 <div className="absolute top-2 right-2 md:top-3 md:right-3 bg-red-500 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-bold">

 New

</div>
</div>


 {/* Content */}

<h3 className={`text-sm md:text-base font-semibold mb-2 h-10 md:h-12 line-clamp-2 overflow-hidden ${darkMode ? 'text-white' : 'text-gray-900'}`}>{product.title}</h3>



 <div className="flex items-center gap-1 mb-2">

<span className="text-yellow-400 text-sm md:text-base">{'⭐'.repeat(Math.floor(rating.rate))}</span>

<span className={`text-xs md:text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-gray-700'}`}>{rating.rate}</span>

<span className={`text-xs md:text-sm ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>({rating.count})</span>

 </div>

{/* Price */}

<div className="flex items-center gap-2 mb-3 md:mb-4">

 <p className="text-xl md:text-2xl font-bold text-blue-600">${product.price}</p>

<p className={`text-base md:text-lg line-through ${darkMode ? 'text-slate-500' : 'text-gray-400'}`}>${Math.round(product.price * 1.2)}</p>

</div>


{/* Button */}

{isCart ? (

 <button onClick={removeProductFromCart} className="w-full font-semibold py-2 px-3 md:px-4 rounded-lg bg-red-500 text-white hover:bg-red-600 transition text-sm md:text-base">
Remove from cart
 </button>

 ) : (

<button 

 onClick={addProductToCart}
className={`w-full font-semibold py-2 px-3 md:px-4 rounded-lg transition text-sm md:text-base ${

 isAdded 
 ? 'bg-green-500 text-white' 
 : 'bg-blue-500 text-white hover:bg-blue-600'

 }`}

 >

 {isAdded ? '✓ Added!' : 'Add to Cart'}
</button>
 )}


 </Link>

)

}


export default ProductCard
