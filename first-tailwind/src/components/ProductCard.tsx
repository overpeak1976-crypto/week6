import React from "react";
import Button from "./Button";

interface ProductCardProps {
    imageUrl: string
    title: string
    description: string
    price: number
    onAddToCart: () => void
}

const ProductCard: React.FC<ProductCardProps> = ({imageUrl, title, description, price, onAddToCart}) =>{
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-full md:w-80 flex flex-col h-full">
            <img src={imageUrl} alt={title} className="w-full h-64 object-contain p-4"/>
            <div  className="flex flex-col flex-1 p-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-gray-700 mt-2 flex-1">{description}</p>
                <p className="font-bold text-gray-900 mt-2">${price}</p>
            <div className="flex justify-center mt-auto p-6">
                <Button variant="primary" size="md" onClick={onAddToCart} className="w-full">Add to Cart</Button>
            </div>
            </div>
        </div>
    )
}

export default ProductCard;