"use client";
import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react';
const page = () => {
    useEffect(() => {
        document.title = "About";
    }, []);
    return (
        <div className="">
            <div className=' hidden sm:block w-2/4 h-96 bg-mirage-950 rounded-2xl m-auto relative p-10'>
                <div className='flex-col justify-center items-center'>


                    <div className="ab flex-col justify-center items-center text-xl font-bold text-center text-white">
                        <h1 className='m-auto text-3xl '>About</h1>
                        <p>Credits go to Gaurav Kasuhlye for the website. Below are the links to connect with me, the tech stack I work with, and the technologies used to build this website.</p>
                        <p>Whole webApp is functional each and evey button please explore it</p>
                    </div>
                    <div className='links flex justify-center mt-5'>
                        <ul className='flex gap-10'>
                            <li><Link href="https://www.linkedin.com/in/gaurav-kaushalye/"><img src="/linkdin.svg" alt="" className='w-[100px] h-[100px]' /></Link></li>
                            <li><Link href="https://github.com/code0star"><img src="/github.svg" alt="" className='w-[100px] h-[100px]' /></Link></li>
                            <li><Link href="https://www.instagram.com/p/DDUP5H4zDu22V-AmA5YvFRD7VndzGehYbXcOFY0/?hl=en"><img src="/instagram.svg" alt="" className='w-[100px] h-[100px]' /></Link></li>
                        </ul>
                    </div>
                </div>

                <div className="tech  flex justify-center absolute bottom-0 m-auto left-[160px] ">
                    <ul className='flex gap-4'>
                        <li> <img src="/html.svg" alt="" className='sm:w-[48px] sm:h-[48px]' /></li>
                        <li><img src="/css.svg" alt="" className='sm:w-[48px] sm:h-[48px]' /></li>
                        <li><img src="/js.svg" alt="" className='sm:w-[48px] sm:h-[48px]' /></li>
                        <li> <img src="/nodejs.svg" alt="" className='sm:w-[48px] sm:h-[48px]' /></li>
                        <li> <img src="/express.svg" alt="" className='sm:w-[48px] sm:h-[48px]' /></li>
                        <li>  <img src="/reactjs.svg" alt="" className='sm:w-[48px] sm:h-[48px]' /></li>
                        <li><img src="/nextjs.svg" alt="" className='sm:w-[48px] sm:h-[48px]' /></li>
                    </ul>
                </div>
            </div>




            <div>
                <div className=' block sm:hidden w-[100vw] h-[90vh] bg-mirage-950 rounded-2xl mx-auto relative p-10 my-5'>

                    <div className='flex-col justify-center items-center'>
                        <div className="ab flex-col justify-center items-center text-xl font-bold text-center text-white">
                            <h1 className='m-auto text-3xl '>About</h1>
                            <p>Credits go to Gaurav Kasuhlye for the website. Below are the links to connect with me, the tech stack I work with, and the technologies used to build this website.</p>
                            <p>Whole webApp is functional each and evey button please explore it</p>
                        </div>
                        <div className='links flex justify-center mt-5'>
                            <ul className=' gap-10'>
                                <li><Link href="https://www.linkedin.com/in/gaurav-kaushalye/"><img src="/linkdin.svg" alt="" className='w-[100px] h-[100px]' /></Link></li>
                                <li><Link href="https://github.com/code0star"><img src="/github.svg" alt="" className='w-[100px] h-[100px]' /></Link></li>
                                <li><Link href="https://www.instagram.com/p/DDUP5H4zDu22V-AmA5YvFRD7VndzGehYbXcOFY0/?hl=en"><img src="/instagram.svg" alt="" className='w-[100px] h-[100px]' /></Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="tech m-auto left-[160px] ">


                        <div className='w-full flex justify-evenly my-2'>
                            <img src="/html.svg" alt="" className="" />
                            <img src="/css.svg" alt="" className="" />
                        </div>
                        <div className='w-full flex justify-evenly my-2'>
                            <img src="/js.svg" alt="" className="" />
                            <img src="/nodejs.svg" alt="" className="" />
                        </div>
                        <div className='w-full flex justify-evenly my-2'>
                            <img src="/express.svg" alt="" className="" />
                            <img src="/reactjs.svg" alt="" className="w-[40px] h-[40px]"  />
                        </div>
                        <div className='w-full flex justify-evenly'><img src="/nextjs.svg" alt="" className="" /></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
