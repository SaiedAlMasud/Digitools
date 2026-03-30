import React from "react";
import { FaCheck } from "react-icons/fa";
function PricingSection() {
    return (
        <div className="py-20">
            <div className="text-center space-y-5">
                <h1 className="text-5xl font-bold">
                    Simple, Transparent Pricing
                </h1>
                <p className="text-[16px] text-gray-600 opacity-80">
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-8/12 mx-auto mt-6">
                <div className="border border-gray-300 shadow-md rounded-lg p-5 bg-base-200">
                    <div className="space-y-2">
                        <h1 className="text-2xl font-semibold">
                            Starter
                        </h1>
                        <p className="text-gray-600">
                            Perfect for getting started
                        </p>
                        <h3 className="text-2xl font-bold my-6">0<span className="text-lg font-normal text-gray-500">/month</span></h3>
                    </div>
                    <div className="mb-11">
                        <p className="space-y-2 text-gray-500 flex gap-3 items-center">
                            <FaCheck className="text-success" />
                            Access to 10 free tools
                        </p>
                        <p className="space-y-2 text-gray-500 flex gap-3 items-center">
                            <FaCheck className="text-success" />
                            Basic templates
                        </p>
                        <p className="space-y-2 text-gray-500 flex gap-3 items-center">
                            <FaCheck className="text-success" />
                            Community support
                        </p>
                        <p className="space-y-2 text-gray-500 flex gap-3 items-center">
                            <FaCheck className="text-success" />
                            1 project per month
                        </p>

                    </div>
                    <button className="btn rounded-full w-full bg-linear-to-r from-blue-500 to-purple-500 text-white mt-3">
                        Get Started Free
                    </button>
                </div>

                <div className="border border-gray-300 shadow-md rounded-lg p-5 bg-linear-to-r from-blue-500 to-purple-500 text-white">
                    <div className="space-y-2">
                        <h1 className="text-2xl font-semibold">
                            Pro
                        </h1>
                        <p className="text-white">
                            Best for professionals
                        </p>
                        <h3 className="text-2xl font-bold my-6">$29<span className="text-lg font-normal text-white">/month</span></h3>
                    </div>
                    <div className="mb-auto">
                        <p className="space-y-2 text-white flex gap-3 items-center">
                            <FaCheck className="text-success" />
                            Access to all premium tools
                        </p>
                        <p className="space-y-2 text-white flex gap-3 items-center">
                            <FaCheck className="text-success" />
                            Unlimited templates
                        </p>
                        <p className="space-y-2 text-white flex gap-3 items-center">
                            <FaCheck className="text-success" />
                            Priority support
                        </p>
                        <p className="space-y-2 text-white flex gap-3 items-center">
                            <FaCheck className="text-success" />
                            Unlimited projects
                        </p>
                        <p className="space-y-2 text-white flex gap-3 items-center">
                            <FaCheck className="text-success" />
                            Cloud sync
                        </p>
                        <p className="space-y-2 text-white flex gap-3 items-center">
                            <FaCheck className="text-success" />
                            Advanced analytics
                        </p>

                    </div>
                    <button className="btn bg-white rounded-full w-full text-purple-500 mt-3">
                        Start Pro Trial
                    </button>

                </div>

                <div className="border border-gray-300 shadow-md rounded-lg p-5 bg-base-200">
                    <div className="space-y-2">
                        <h1 className="text-2xl font-semibold">
                            Enterprise
                        </h1>
                        <p className="text-gray-600">
                            For teams and businesses
                        </p>
                        <h3 className="text-2xl font-bold my-6">$99<span className="text-lg font-normal text-gray-500">/month</span></h3>
                    </div>
                    <div className="mb-">
                        <p className="space-y-2 text-gray-500 flex gap-3 items-center">
                            <FaCheck className="text-success" />
                           Everything in Pro
                        </p>
                        <p className="space-y-2 text-gray-500 flex gap-3 items-center">
                            <FaCheck className="text-success" />
                            Team collaboration
                        </p>
                        <p className="space-y-2 text-gray-500 flex gap-3 items-center">
                            <FaCheck className="text-success" />
                            Custom integrations
                        </p>
                        <p className="space-y-2 text-gray-500 flex gap-3 items-center">
                            <FaCheck className="text-success" />
                            Dedicated support
                        </p>
                        <p className="space-y-2 text-gray-500 flex gap-3 items-center">
                            <FaCheck className="text-success" />
                            SLA guarantee
                        </p>
                        <p className="space-y-2 text-gray-500 flex gap-3 items-center">
                            <FaCheck className="text-success" />
                            Custom branding
                        </p>

                    </div>
                    <button className="btn rounded-full w-full bg-linear-to-r from-blue-500 to-purple-500 text-white mt-3">
                        Contact Sales
                    </button>
                </div>
            </div>
        </div>

    );
}
export default PricingSection;