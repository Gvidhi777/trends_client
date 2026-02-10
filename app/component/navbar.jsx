"use client"

import { useState, React } from "react"
import { ChevronDown, Home } from "lucide-react"
import Link from "next/link"


const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (

        <div className='w-full flex justify-between h-20 items-center bg-[#043042]'>
            <div className='w-[10%] h-full flex items-center' >
                <span className='p-1'><img src="/logo.png" className='px-4 lg:px-2 max-w-[300] h-auto' alt="logo" /></span>
            </div>
            <div className='w-[50%] h-full '>
                <ul className="w-full h-full flex gap-6 items-center justify-center text-2xl font-medium text-zinc-100">
                    <li className="cursor-pointer hover:text-amber-500 border-b-2 border-transparent hover:border-orange-500">
                        <Link
                            href="/"
                        >
                            <Home />
                        </Link>
                    </li>
                    <li className="cursor-pointer hover:text-amber-500 hover:underline hover:decoration-2 hover:decoration-orange-500">
                        Trending Hashtags
                    </li>
                    <li className="cursor-pointer hover:text-amber-500 hover:underline hover:decoration-2 hover:decoration-orange-500">
                        Banned Hashtags
                    </li>
                    <li className="cursor-pointer hover:text-amber-500 hover:underline hover:decoration-2 hover:decoration-orange-500">
                        Couple Hashtags
                    </li>



                    {/* MORE DROPDOWN */}
                    <li className="relative">
                        <button
                            onClick={() => setOpen(!open)}
                            className="flex items-center gap-1 hover:text-amber-500"
                        >
                            More
                            <ChevronDown
                                className={`w-5 h-5 transition-transform ${open ? "rotate-180" : "" }`}
                            />
                        </button>

                        {open && (
                            <div className="absolute right-0 mt-4 w-64 bg-[#043042] text-white rounded-md shadow-lg overflow-hidden">
                                <Link
                                    href="/contact"
                                    className="block px-6 py-4 text-xl text-orange-400 hover:bg-[#032530]"
                                >
                                    Contact Us
                                </Link>

                                {/* bottom accent line */}
                                <div className="h-1 bg-orange-400" />
                            </div>
                        )}
                    </li>

                </ul>

            </div>



        </div>

    )
}
export default Navbar;