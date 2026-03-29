import React from "react";
function TutorialSection() {
    return (
        <div className="my-20">
            <div className="text-center space-y-5">
                <h1 className="text-5xl font-bold">
                    Get Started in 3 Steps
                </h1>
                <p className="text-[16px] text-gray-600 opacity-80">
                    Start using premium digital tools in minutes, not hours.
                </p>
            </div>
            <div className="grid grid-cols-3 gap-10 w-10/12 mx-auto mt-10">

                <div className="text-center space-y-3 border-2 border-gray-200 rounded-lg p-6">
                    <div className="flex justify-end">
                        <span className="py-3 px-5 text-[16px] font-semibold bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-full">1</span>
                    </div>
                    <div className="p-7 bg-[#E1E7FF] rounded-full flex justify-center items-center w-32 h-32 mx-auto">
                        <img src="/src/assets/user.png" alt="Create Account" />
                    </div>
                    <h1 className="text-2xl font-semibold">Create Account</h1>
                    <p className="text-[16px] text-gray-600 opacity-80">
                        Sign up for free in seconds. No credit card required to get started.
                    </p>
                </div>

                <div className="text-center space-y-3 border-2 border-gray-200 rounded-lg p-6">
                    <div className="flex justify-end">
                        <span className="py-3 px-5 text-[16px] font-semibold bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-full">2</span>
                    </div>
                    <div className="p-7 bg-[#E1E7FF] rounded-full flex justify-center items-center w-32 h-32 mx-auto">
                        <img src="/src/assets/package.png" alt="Create Account" />
                    </div>
                    <h1 className="text-2xl font-semibold">Choose Products</h1>
                    <p className="text-[16px] text-gray-600 opacity-80">
                        Browse our catalog and select the tools that fit your needs.
                    </p>
                </div>

                <div className="text-center space-y-3 border-2 border-gray-200 rounded-lg p-6">
                    <div className="flex justify-end">
                        <span className="py-3 px-5 text-[16px] font-semibold bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-full">3</span>
                    </div>
                    <div className="p-7 bg-[#E1E7FF] rounded-full flex justify-center items-center w-32 h-32 mx-auto">
                        <img src="/src/assets/rocket.png" alt="Create Account" />
                    </div>
                    <h1 className="text-2xl font-semibold">Start Creating</h1>
                    <p className="text-[16px] text-gray-600 opacity-80">
                        Download and start using your premium tools immediately.
                    </p>
                </div>

                
            </div>
        </div>
    );
}
export default TutorialSection;