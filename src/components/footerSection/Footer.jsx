import React from "react";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-20 w-full">
            <div className="flex flex-col md:flex-row gap-18 w-7/12 mx-auto">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold">Digitools</h1>
                    <p className="text-[16px] text-white opacity-80">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>
                <div className="space-y-3">
                    <h1 className="text-[20px] font-medium">Product</h1>
                    <p className="text-[16px] text-white opacity-80">Features</p>
                    <p className="text-[16px] text-white opacity-80">Pricing</p>
                    <p className="text-[16px] text-white opacity-80">Templates</p>
                    <p className="text-[16px] text-white opacity-80">Intigrations</p>
                </div>
                <div className="space-y-3">
                    <h1 className="text-[20px] font-medium">Company</h1>
                    <p className="text-[16px] text-white opacity-80">About</p>
                    <p className="text-[16px] text-white opacity-80">Blog</p>
                    <p className="text-[16px] text-white opacity-80">Careers</p>
                    <p className="text-[16px] text-white opacity-80">Press</p>
                </div>
                <div className="space-y-3">
                    <h1 className="text-[20px] font-medium">Resources</h1>
                    <p className="text-[16px] text-white opacity-80">Documentation</p>
                    <p className="text-[16px] text-white opacity-80">Help Center</p>
                    <p className="text-[16px] text-white opacity-80">Community</p>
                    <p className="text-[16px] text-white opacity-80">Contact</p>
                </div>
                <div className="space-y-3">
                    <h1 className="text-[20px] font-medium">Social Links</h1>
                    <div className="flex gap-5">
                            <RiInstagramFill />
                            <FaSquareFacebook />
                            <FaXTwitter />
                        
                    </div>
                </div>
            </div>

        <div className="divider divider-neutral before:bg-gray-500 after:bg-gray-500 text-gray-500 w-8/12 mx-auto mt-10"></div>
            <div className="container mx-auto flex flex-col md:flex-row space-y-3 justify-between items-center w-7/12">
                <p className="text-center">
                    &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                </p>
                 
                <div className="flex justify-center gap-10">
                    <p className="text-[16px] text-white opacity-80">Privacy Policy</p>
                    <p className="text-[16px] text-white opacity-80">Terms of Service</p>
                    <p className="text-[16px] text-white opacity-80">Cookies</p>
                </div>
            </div>
        </footer>
    );
}
export default Footer;