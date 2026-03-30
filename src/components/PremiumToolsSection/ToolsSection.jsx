import React, { use, useState } from "react";
import PremiumCard from "./PremiumCard";
import CartSection from "./CartSection";
function ToolsSection({ toolsPromise, selectedProduct, setSelectedProduct }) {
    const [totalPrice, setTotalPrice] = useState(0);
    const[buttonType, setButtonType] = useState("product");
    
    const tools = use(toolsPromise); 
    const handleProductbtn = () => {
        setButtonType("product");
    } 
    const handleCartbtn = () => {
        setButtonType("cart");
    }
    return (
        <div className="my-15 mx-auto">
            <div className="text-center space-y-7">
                <h1 className="text-5xl font-bold">
                    Premium Digital Tools
                </h1>
                <p className="text-md text-gray-600">
                    Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.
                </p>
            </div>
            <div className="flex justify-center my-6">
                <button onClick={handleProductbtn} className={`btn rounded-l-3xl ${buttonType === "product" ? "bg-linear-to-r from-blue-500 to-purple-500 text-white" : "bg-gray-200 text-gray-600"}`}>
                    Products
                </button>
                <button onClick={handleCartbtn} className={`btn rounded-r-3xl ${buttonType === "cart" ? "bg-linear-to-r from-blue-500 to-purple-500 text-white" : "bg-gray-200 text-gray-600"}`}>
                    Cart {selectedProduct.length > 0 ? `(${selectedProduct.length})` : ""}
                </button>
            </div>
            <div className="">
                {buttonType === "product" ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-11/12 mx-auto">
                    {tools.map((tool) => (
                    <PremiumCard setSelectedProduct={setSelectedProduct} selectedProduct={selectedProduct} key={tool.id} tool={tool} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>
                    ))}
                </div>
                ) : 
                (<CartSection selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} totalPrice={totalPrice} setTotalPrice={setTotalPrice}/>)}
            </div>
        </div>
    );
}
export default ToolsSection;