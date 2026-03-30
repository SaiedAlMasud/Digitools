import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
function PremiumCard({ setSelectedProduct, selectedProduct, tool, totalPrice, setTotalPrice }) {
    const [buttonText, setButtonText] = useState("Buy Now");
    const handleAddToCart = () => {
        if (selectedProduct.find((p) => p.id === tool.id)) {
            toast.error(`${tool.name} is already in the cart!`, {
                position: "top-right",
                autoClose: 3000,
            });
            return;
        }
        setButtonText("Added to Cart");
        setSelectedProduct((prev) => [...prev, tool]);
        setTotalPrice((prev) => prev + tool.price);
        toast.success(`${tool.name} added to cart!`, {
            position: "top-right",
            autoClose: 3000,
        });
    };

    return (
        <div className="shadow-lg p-7 border rounded-lg border-gray-200 space-y-5">
            <div className="flex justify-between">
                <div className="border border-gray-200 rounded-full p-3">
                    <img src={tool.image} alt={tool.name} />
                </div>
                <div>
                    {tool.tagType === "new" ? <span className="bg-[#DBFCE7] text-[#0A883E] rounded-full px-3 py-1 font-normal items-center">{tool.tag}</span> :
                        tool.tagType === "popular" ? <span className="bg-[#E1E7FF] text-[#4F39F6] rounded-full px-3 py-1 font-normal items-center">{tool.tag}</span> :
                            <span className="bg-[#FEF3C6] text-[#BB4D00] rounded-full px-3 py-1 font-normal items-center">{tool.tag}</span>}
                </div>
            </div>
            <div className="space-y-4">
                <h1 className="text-2xl font-semibold">
                    {tool.name}
                </h1>
                <p className="text-gray-600">
                    {tool.description}
                </p>
                <h3 className="text-2xl font-bold">${tool.price}<span className="text-lg font-normal text-gray-500">/{tool.period}</span></h3>
            </div>
            <div>
                {tool.features.map((feature) => (
                    <p className="space-y-2 text-gray-400 flex gap-3 items-center">
                        <FaCheck className="text-success" />
                        {feature}
                    </p>
                ))}
            </div>
            <button
                onClick={handleAddToCart}
                className={`btn rounded-full w-full mt-3 ${buttonText === "Added to Cart"
                        ? "bg-green-500 text-white"
                        : "bg-linear-to-r from-blue-500 to-purple-500 text-white"
                    }`}
            >
                {buttonText}
            </button>
        </div>
    );
}
export default PremiumCard;