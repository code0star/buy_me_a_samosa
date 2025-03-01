"use client";
import React from 'react'
import "../globals.css";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useEffect } from 'react';

const page = () => {
  useEffect(() => {
    document.title = "Services";
  }, []);
  const router = useRouter();

  const handleNavigate = (value) => {
    router.push(`/buy?value=${encodeURIComponent(value)}`);
  };

  return (
    <div className=''>

      <div className=" h-[86vh] sm:h-[81.4vh] sm:w-full overflow-auto relative ">

        <div className="sticky top-0 sm:flex h-screen  items-center justify-center backdrop-blur-3xl">
          <div className='-mt-24'>
          <img src="/deve.gif" alt="" className='sm:w-[50vw] sm:h-[75vh]'/>
          </div>
          <div className=" sm:m-auto mx-14 flex sm:w-1/2 flex-col sm:items-start items-center justify-center gap-4 p-10 backdrop-blur-3xl">
            <h2 className="text-4xl font-bold text-white">Web Developer</h2>
            <p className="font-sans text-lg text-white">I am a MERN stack developer and can build an end-to-end website for you. For further discussion, book a session.</p>
            <button onClick={() => handleNavigate("30")} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-1 mb-0">Book</button>
          </div>
        </div>

       

        <div className=" hidden  sm:flex sticky top-0  h-screen items-center justify-center backdrop-blur-3xl">
          <div className=" m-auto  w-2/4 flex-col items-start justify-center gap-4 p-10 backdrop-blur-xl">
            <h2 className="text-4xl font-bold text-black">DSA Mentor</h2>
            <p className="font-sans text-lg text-black">Solved 200+ LeetCode Problems. Written acticle on Linkdin . Book a session for further discussions</p>
            <button onClick={() => handleNavigate("50")} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-1 mb-0">Book</button>
          </div>
           <div className='-mt-24'>
          <img src="/code.gif" alt="" className='w-[50vw] h-[75vh]'/>
          </div>
        </div>

        <div className="sm:hidden  sticky top-0 h-screen flex-col items-center justify-center backdrop-blur-3xl ">
        <div className='flex justify-center items-center'>
          <img src="/code.gif" alt="" className='w-[50vw] h-[40vh]'/>
          </div>
          <div className=" m-auto flex w-3/4 flex-col items-center justify-center gap-4 p-10 backdrop-blur-xl">
            <h2 className="text-4xl font-bold text-black">DSA Mentor</h2>
            <p className="font-sans text-lg text-black">Solved 200+ LeetCode Problems. Written acticle on Linkdin . Book a session for further discussions</p>
            <button onClick={() => handleNavigate("50")} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-1 mb-0">Book</button>
          </div>
       </div>
          
        

        <div className=" hidden sticky top-0 sm:flex h-screen items-center justify-center backdrop-blur-3xl">
          <div className='-mt-24'>
          <img src="/convo.gif" alt="" className='w-[50vw] h-[75vh]'/>
          </div>
          <div className=" m-auto flex w-2/4 flex-col items-start justify-center gap-4 p-10 backdrop-blur-3xl">
            <h2 className="text-4xl font-bold text-black">Consultation</h2>
            <p className="font-sans text-lg text-black">Consultation available for career guidance in web development, engineering, financial matters, and emotional well-being. Book a session for further discussion.</p>
            <button onClick={() => handleNavigate("10")} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-1 mb-0">Book</button>
            </div>
        </div>

        <div className=" sm:hidden sticky top-0 flex-col h-screen items-center justify-center backdrop-blur-3xl">
          <div className='-mt-24 flex justify-center items-center'>
          <img src="/convo.gif" alt="" className='w-[50vw] h-[40vh]'/>
          </div>
          <div className=" m-auto flex w-3/4 flex-col items-center justify-center gap-4 p-10 backdrop-blur-3xl">
            <h2 className="text-4xl font-bold text-black">Consultation</h2>
            <p className="font-sans text-lg text-black">Consultation available for career guidance in web development, engineering, financial matters, and emotional well-being. Book a session for further discussion.</p>
            <button onClick={() => handleNavigate("10")} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-1 mb-0">Book</button>
            </div>
        </div>

      

        <div className=" hidden sticky top-0 sm:flex h-screen items-center justify-center backdrop-blur-3xl">
          <div className=" m-auto flex w-2/4 flex-col items-start justify-center gap-4 p-10 backdrop-blur-3xl">
            <h2 className="text-4xl font-bold text-white">Content Writer</h2>
            <p className="font-sans text-lg text-white">65,000+ views on a LinkedIn article. Book a session for fuether discissions.</p>
            <button onClick={() => handleNavigate("20")} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-1 mb-0">Book</button>
          </div>
           <div className='-mt-24 '>
          <img src="/content.gif" alt="" className='w-[50vw] h-[75vh]'/>
          </div>
        </div>

        <div className=" sm:hidden sticky top-0  h-screen flex-col items-center justify-center backdrop-blur-3xl">
        <div className='-mt-24 flex justify-center items-center'>
          <img src="/content.gif" alt="" className='w-[50vw] h-[40vh]'/>
          </div>
          <div className=" m-auto flex w-3/4 flex-col items-center justify-center gap-4 p-10 backdrop-blur-3xl">
            <h2 className="text-4xl font-bold text-white">Content Writer</h2>
            <p className="font-sans text-lg text-white">65,000+ views on a LinkedIn article. Book a session for fuether discissions.</p>
            <button onClick={() => handleNavigate("10")} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-1 mb-0">Book</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default page
