import React from "react";
import { toast } from "react-toastify";
function CartSection({ selectedProduct, setSelectedProduct,totalPrice, setTotalPrice }) {
    const handleRemove = (id) => {
        setSelectedProduct(selectedProduct.filter((p) => p.id !== id));
        setTotalPrice((prev) => prev - selectedProduct.find((p) => p.id === id).price);
        toast.info("Product removed from cart!", {
            position: "top-right",
            autoClose: 3000,
        });
    };
    const handleCheckout = () => {
        toast.success("Checkout successful!", {
            position: "top-right",
            autoClose: 3000,
        });
        setSelectedProduct([]);
        setTotalPrice(0);
    }
    return (
        <div className="p-10 rounded-lg border border-gray-300 shadow-md">
            <div><h1 className="text-xl font-bold mb-5">Your Cart</h1></div>
            {selectedProduct.length === 0 ?
                <div className="flex flex-col items-center justify-center text-gray-500 my-30 space-y-4">
                    <img className="w-8 h-8" src="/assets/products/shopping-cart.png" alt="" />
                    <p className="text-2xl">Your cart is empty.</p>
                </div> :
                <div className="grid grid-cols-1 gap-6 my-10">
                    {selectedProduct.map((product) => (
                        <div>
                            <div key={product.id} className="border border-gray-200 bg-base-200 p-4 rounded-lg shadow-md flex justify-between">
                                <div className="flex gap-5">
                                    <span className="p-3 bg-white rounded-full border border-gray-300"><img src={product.image} alt={product.name} /></span>
                                    <div>
                                        <h2 className="text-xl font-bold">{product.name}</h2>
                                        <p className="text-gray-600">${product.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                <button className=" text-red-500 text-lg font-semibold" onClick={() => handleRemove(product.id)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <div>
                        <div className="flex justify-between items-center my-2">
                            <p>Total: </p>
                            <h3 className="text-xl font-semibold">${totalPrice.toFixed(2)}</h3>
                        </div>
                        <div>
                            <button onClick={handleCheckout} className="btn rounded-full w-full bg-linear-to-r from-blue-500 to-purple-500 text-white mt-3">
                                Proceed To Checkout
                            </button>
                        </div>
                    </div>
                </div>}
        </div>
    );
}
export default CartSection;