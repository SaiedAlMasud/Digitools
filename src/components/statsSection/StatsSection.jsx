import React from "react";
function StatsSection() {
    return (
        <div className="bg-linear-to-r from-blue-500 to-purple-500 py-14">
            <div className="flex gap-4 justify-between items-center mx-auto">
                <div className="mx-auto">
                    <h1 className="text-5xl font-bold text-white mb-2">50K+</h1>
                    <p className="text-white text-xl">Active Users</p>
                </div>
                 <div className="divider divider-horizontal divider-accent"></div>
                <div className="mx-auto">
                    <h1 className="text-5xl font-bold text-white mb-2">200+</h1>
                    <p className="text-white text-xl">Premium Tools</p>
                </div>
                <div className="divider divider-horizontal divider-accent"></div>
                <div className="mx-auto">
                    <h1 className="text-5xl font-bold text-white mb-2">4.9</h1>
                    <p className="text-white text-xl">Rating</p>
                </div>
            </div>
        </div>
    );
}
export default StatsSection;