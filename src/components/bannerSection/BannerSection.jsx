import React from "react";
import { CiPlay1 } from "react-icons/ci";
import BannerHead from "./BannerHead";
function BannerSection() {
    return (
        <div className="flex gap-30 justify-center items-center my-20">
            <div>
                <BannerHead />
                <h1 className="text-7xl font-extrabold mb-6 text-[#101727]">
                    Supercharge Your <br/>Digital Workflow
                </h1>
                <p className="text-[#627382] text-[18px]">
                    Access premium AI tools, design assets, templates, and productivity,<br />
                    software—all in one place. Start creating faster today.<br />
                    Explore Products
                </p>
                <div className="my-5">
                    <button className="btn rounded-full bg-linear-to-r from-blue-500 to-purple-500 text-white mr-5">
                        Explore Products
                    </button>
                    <button className="btn btn-outline rounded-full text-purple-500 border-purple-500">
                        <CiPlay1 className="text-lg font-bold"/>
                        Watch Demo
                    </button>
                </div>
            </div>
            <div className="Banner-img">
                <img src="/src/assets/Banner.png" alt="Banner" />
            </div>
        </div>
    );
}
export default BannerSection;