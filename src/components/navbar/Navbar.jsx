import React from "react";
import { CiShoppingCart } from "react-icons/ci";
function Navbar({ selectedProduct }) {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <h1 className="text-3xl font-bold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">DigiTools</h1>
            </div>
            <div className="navbar-center">
                <ul className="menu menu-horizontal px-1 flex gap-8 text-[16px] font-semibold">
                    <li>Products</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="relative">
                    <CiShoppingCart className="text-2xl font-semibold mr-2" />
                    {selectedProduct.length > 0 ? 
                        <span className="px-2 bg-red-500 rounded-full absolute -top-3 -right-3 text-white">{selectedProduct.length}</span> :
                        null}
                </div>
                <a className="btn btn-ghost rounded-3xl mr-4 text-[16px]">Login</a>
                <a className="btn rounded-3xl bg-linear-to-r from-blue-500 to-purple-500 text-white">
                    Get Started
                </a>
            </div>
        </div>
    );
}
export default Navbar;