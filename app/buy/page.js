import React from 'react'


const page = () => {
  return (
    <div>
      <div>
        <p className='text-white font-extrabold text-3xl flex justify-center items-center text-lg'>
          <span className='mx-2'>Each</span> <img src="/samosa_one.png" alt="" className='w-[60px] h-[60px]' /> <span> == 10</span>
        </p>
      </div>
      <div className='flex items-center justify-center mt-10'>
        <div className="support text-white rounded-xl bg-mirage-950 w-[40vw] h-[60vh] m-auto p-10">
          <h1 className='font-bold text-2xl mb-5'>Supporters</h1>
          <ul>
            <li className='flex justify-between font-extrabold text-xl'><p>Message</p><p>Amount</p></li>
            <li className='flex justify-between m-3 font-bold'><p>bheek</p><p>100</p></li>
          </ul>
        </div>
        <div className="payment text-white rounded-xl bg-mirage-950 w-[40vw] h-[60vh] m-auto p-10">
          <h1 className='font-bold text-2xl mb-5'>Make A Payment...</h1>
          <div className='flex flex-wrap items-center justify-center'>
            <input type="text" className='w-full p-3 rounded-lg bg-stone-800 m-2' placeholder='Enter Your Name ' />
            <input type="text" className='w-full p-3 rounded-lg bg-stone-800 m-2' placeholder='Enter your Message' />
            <input type="text" className='w-full p-3 rounded-lg bg-stone-800 m-2' placeholder='Enter Amount ' />
            <div className='w-full flex justify-evenly'>
              <button className="relative inline-flex items-center justify-center p-0 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-0 py-0 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  <img src="/samosa_one.png" alt="" className='w-[50px] h-[50px] mt-1 pl-2' />
                </span>
              </button>
              <button className="relative inline-flex items-center justify-center p-0 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-0 py-0 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  <div className="flex">
                  <img src="/samosa_one.png" alt="" className='w-[50px] h-[50px] mt-1 pl-2' />
                  <img src="/samosa_one.png" alt="" className='w-[50px] h-[50px] mt-1 pl-2' />
                  </div>
                 
                </span>
              </button>
              <button className="relative inline-flex items-center justify-center p-0 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-0 py-0 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  <div className='flex'>
                  <img src="/samosa_one.png" alt="" className='w-[50px] h-[50px] mt-1 pl-2' />
                  <img src="/samosa_one.png" alt="" className='w-[50px] h-[50px] mt-1 pl-2' />
                  <img src="/samosa_one.png" alt="" className='w-[50px] h-[50px] mt-1 pl-2' />
                  </div>
                 
                </span>
              </button>
            </div>
            <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-3 mb-2">Pay</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default page
