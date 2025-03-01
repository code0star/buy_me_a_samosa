"use client";
import React from 'react'
import { useEffect } from 'react';
const page = () => {
    useEffect(() => {
        document.title = "Payment";
      }, []);

    return (
        <div className='sm:flex sm:flex-row flex-col justify-evenly items-center m-auto sm:w-screen sm:h-[80vh] w-screen h-[86vh] overflow-auto '>
             <img src="/oops.svg" alt="" className=' m-auto sm:w-[20vw] sm:h-[20vw] w-[20vh] h-[20vh] sm:absolute bottom-9 right-0 ' />
            <div className='m-3'>
                <img src="/QR.jpg" alt="" />
            </div>
            <div className='sm:text-3xl m-auto text-xl sm:text-left text-center font-bold text-white w-[80vw] sm:w-[50vw]'>
                <div className='z-10'>
                <p className='m-4'>Payment Gate Way Is Not Active Yet Please Pay On The Given QR
                </p>
                <p className='m-4'>After Payment Send Me The Sccreen Shot </p>
                <p className='m-4'>
                    Contact:- 9359797970
                   
                </p>
                <p className='m-4'>Email:-gauravkaushalye@gmail.com
                </p>
                </div>
               
            </div>
            <img src="/oops.svg" alt="" className='hidden sm:block w-[20vw] h-[20vw] sm:absolute bottom-9 right-0 ' />
        </div>
    )
}

export default page
