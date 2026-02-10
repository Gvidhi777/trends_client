import React from 'react';
import {
    Search,
    Video,
    Film,
    PlaySquare,
    MonitorPlay,
    Play,
    Phone,
    Image,
    Star,
    Hash,
    User
} from "lucide-react"

const tools = [
    { icon: <Video className="text-orange-500 w-6 h-6" />, label: "Video downloader" },
    { icon: <Film className="text-orange-500 w-6 h-6" />, label: "Insta Reels downloader" },
    { icon: <PlaySquare className="text-orange-500 w-6 h-6" />, label: "Facebook Reels Downloader" },
    { icon: <MonitorPlay className="text-orange-500 w-6 h-6" />, label: "Insta Story Saver" },
    { icon: <Play className="text-orange-500 w-6 h-6" />, label: "YouTube Shorts Downloader" },
    { icon: <Phone className="text-orange-500 w-6 h-6" />, label: "Profile Pic downloader" },
    { icon: <Image className="text-orange-500 w-6 h-6" />, label: "Thumbnail downloader" },
    { icon: <Star className="text-orange-500 w-6 h-6" />, label: "Highlights downloader" },
    { icon: <Hash className="text-orange-500 w-6 h-6" />, label: "Wedding Tags generator" },
    { icon: <User className="text-orange-500 w-6 h-6" />, label: "User Info" },
]


const Home = () => {

    return (
        <div className='w-full p-7 min-h-[calc(100vh-60px)] flex flex-col items-center'>
            <div className='flex flex-col items-center mx-6 px-10 py-3'>
            <div className='w-full h-full flex items-center justify-center text-[#eb5d13] text-4xl font-bold p-5'>
                <span className='text-[#043042] pr-0.5'>Trending Hashtag: </span> Best Hashtags Generator
            </div>

            <div className="w-full max-w-175 flex items-center border border-[#f9a629] bg-white rounded-full text-gray-700">
                <input
                    type="text"
                    placeholder="Explore hashtags, trends, and more...."
                    className="flex-1 border-none outline-none px-4 py-3 text-base rounded-full placeholder-gray-400"
                />

                <button
                        className="w-12 h-12 flex items-center justify-center rounded-r-full bg-[#F9A629] text-white text-lg cursor-pointer hover:bg-[#eb5d13]"
                >
                        <Search />  
                </button>
            </div>

            <div className="max-w-3xl my-3">
                    <p className="text-justify px-4 text-xl leading-relaxed">
                        Welcome to <a href="https://www.trendinghashtag.in/trending-hashtags" className='text-[#eb5d13]'>trendinghashtag.in</a> &nbsp; the best hashtag generator for your social media posts like Instagram, X (Twitter), YouTube, Facebook. Our trending hashtags generator
                        uses artificial intelligence (AI) to provide the best and trending hashtags for your social media posts. Weather you are posting on &nbsp;
                        <a href="https://www.trendinghashtag.in/twitter-hashtags" className='text-[#eb5d13]'>X (Twitter)</a>, Tiktok, &nbsp;
                        <a href="https://www.trendinghashtag.in/facebook-hashtags" className='text-[#eb5d13]'>Facebook</a>, &nbsp;
                        <a href="https://www.trendinghashtag.in/instagram-hashtags" className='text-[#eb5d13]'>Instagram</a> &nbsp;
                    and any other platform, we provide the best hashtags.
                </p>
            </div>

            <div className='py-2'>
                <h2 className='text-3xl font-bold text-[#043042]'>Free Download</h2>
            </div>
            <div className='px-5 text-xl flex gap-4 items-center py-2'>
                <a href="https://www.trendinghashtag.in/twitter-hashtags" className='text-[#eb5d13] px-2'>Insta Reels</a>
                <a href="https://www.trendinghashtag.in/twitter-hashtags" className='text-[#eb5d13] px-2'>Facebook Videos</a>
                <a href="https://www.trendinghashtag.in/twitter-hashtags" className='text-[#eb5d13] px-2'>Youtube Videos</a>
                <a href="https://www.trendinghashtag.in/twitter-hashtags" className='text-[#eb5d13] px-2'>Insta stories</a>
                <a href="https://www.trendinghashtag.in/twitter-hashtags" className='text-[#eb5d13] px-2'>Pinterest Videos</a>
                <a href="https://www.trendinghashtag.in/twitter-hashtags" className='text-[#eb5d13] px-2'>Reddit Videos</a>
            </div>

            <div>
                <button className='bg-[#eb5d13] text-white px-4 py-2 rounded-md mt-4 hover:bg-amber-500'>
                    Free Download Now &gt; &gt;
                </button>
            </div>

            </div>

            <div className="w-full bg-[#FBF9F4] py-10">
                <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-6">
                    {tools.map((tool, index) => (
                        <div
                            key={index}
                            className="bg-[#FFFCEF] rounded-xl py-8 flex flex-col items-center justify-center gap-3 cursor-pointer hover:shadow-md transition"
                        >
                            <div className="text-orange-500 text-2xl">
                                {tool.icon}
                            </div>
                            <p className="text-sm text-gray-800 text-center font-medium">
                                {tool.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Home