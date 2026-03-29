import React, { use } from "react";
import PremiumCard from "./PremiumCard";
function ToolsSection({ toolsPromise }) {
    const tools = use(toolsPromise);  
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
                <a className="btn rounded-l-3xl bg-linear-to-r from-blue-500 to-purple-500 text-white">
                    Products
                </a>
                <a className="btn rounded-r-3xl">
                    Cart
                </a>
            </div>
            <div className="grid grid-cols-3 gap-12 w-11/12 mx-auto">
                {tools.map((tool) => (
                    <PremiumCard key={tool.id} tool={tool} />
                ))}
            </div>
        </div>
    );
}
export default ToolsSection;