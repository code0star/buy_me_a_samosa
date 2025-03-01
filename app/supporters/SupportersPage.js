"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { createPost } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const SupportersPage = () => {

  useEffect(() => {
    document.title = "Supporters";
  }, []);
  //hiding samosa when coming form services 
  const searchParams = useSearchParams();
  const hasValueParam = searchParams.has("value");



  // to get amt value form service page

  const value = searchParams.get("value");


  // to fetch data for left block
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false); // Hide loader
      })
      .catch((err) => console.error(err));
  }, []);

  const [loading, setLoading] = useState(true);
  //to submit data to the serevr mongo
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", desc: "", amt: 0 });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log("ji");
    e.preventDefault();
    await createPost(new FormData(e.target));
    router.push("/pay");
  };


  const handleAutoFill = (value) => {
    setFormData((prev) => ({ ...prev, amt: value }));
  }

  // value update by service page
  useEffect(() => {
    if (value) setFormData((prev) => ({ ...prev, amt: value }));
  }, [value]);

  return (
    
    <div className="">

      <div>
        <p className='text-white font-extrabold text-3xl flex justify-center items-center text-lg '>
          <span className='mx-2'>Each</span> <img src="/samosa_one.png" alt="samosa image" className='w-[60px] h-[60px]' /> <span> == 10</span>
        </p>
      </div>
      <div className=' sm:flex items-center justify-center mt-10'>
        <div className=" hidden sm:block support text-white rounded-xl bg-mirage-950  w-[40vw] h-[60vh] m-auto p-10">
          <h1 className='font-bold text-2xl mb-5'>Supporters</h1>
          <ul>
            <li className='flex justify-between font-extrabold text-xl'><p>Name</p><p>Amount</p></li>
          </ul>
          <div className="overflow-scroll scrollbar-hide h-[40vh]">
            { loading ? (
              <img src="/loding_c.gif" alt="Loading..." className="mx-auto w-16 h-16 relative top-[100px]" />
            ) : (
              <ul>
                { data.slice().reverse().map((item) => (
                  <li key={ item._id } className='flex justify-between m-3 font-bold'>
                    <div className=" min-w-[150px]">{ item.name }</div>
                    <div className=" min-w-[320px]">{ item.desc }</div>
                    <div className=" min-w-[50px] flex justify-end"> { item.amt }</div>
                  </li>
                )) }
              </ul>
            ) }
          </div>
        </div>

        <div className="  sm:hidden support text-white rounded-xl bg-mirage-950  w-[90vw] h-[80vh] m-auto my-10 p-10">
          <h1 className='font-bold text-2xl mb-5'>Supporters</h1>

          <div className="overflow-scroll scrollbar-hide h-[63vh]">
            { loading ? (
              <img src="/loding_c.gif" alt="Loading..." className="mx-auto w-16 h-16 relative top-[100px]" />
            ) : (
              <ul>
                { data.slice().reverse().map((item) => (
                  <li key={ item._id } className=' justify-between m-3 font-bold'>
                    <div className="bg-mirage-900 p-3 rounded-xl">
                    <div className="  flex "><p className="mr-7 w-16">Name:- </p><div className="w-40">{ item.name }</div></div>
                    <div className=" flex "><p className="mr-7 w-16">Message:- </p><div className="w-40">{ item.desc }</div></div>
                    <div className="  flex "><p className="mr-7 w-16">Amount:-</p> <div className="w-40">{ item.amt }</div></div>
                    </div>
                  </li>
                )) }
              </ul>
            ) }
          </div>
        </div>

        <div className="support text-white rounded-xl bg-mirage-950 w-[90vw] sm:w-[40vw] h-[60vh] m-auto sm:mb-0 mb-10 p-10">
          <form onSubmit={ handleSubmit }>
            <div className="">
              <h1 className='font-bold text-2xl mb-5'>Make A Payment...</h1>
              <div className='flex flex-wrap items-center justify-center'>
                <input name="name" type="text" className='w-full p-3 rounded-lg bg-stone-800 m-2' placeholder='Enter Your Name ' onChange={ handleChange } required value={ formData.name } />
                <input name="desc" type="text" className='w-full p-3 rounded-lg bg-stone-800 m-2' placeholder='Enter your Message' onChange={ handleChange } required value={ formData.desc } />
                <input name="amt" type="number" className='w-full p-3 rounded-lg bg-stone-800 m-2' placeholder='Enter Amount ' onChange={ handleChange } required value={ formData.amt } />
                <div className='w-full flex justify-evenly'>
                  { !hasValueParam && <button type="button" onClick={ () => handleAutoFill(10) } className="relative inline-flex items-center justify-center p-0 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-0 py-0 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                      <img src="/samosa_one.png" alt="samosa img" className='w-[50px] h-[50px] mt-1 pl-2' />
                    </span>
                  </button> }
                  { !hasValueParam && <button type="button" onClick={ () => handleAutoFill(20) } className="relative inline-flex items-center justify-center p-0 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-0 py-0 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                      <div className="flex">
                        <img src="/samosa_one.png" alt="samosa " className='w-[50px] h-[50px] mt-1 pl-2' />
                        <img src="/samosa_one.png" alt="samosa " className='w-[50px] h-[50px] mt-1 pl-2' />
                      </div>

                    </span>
                  </button> }
                  { !hasValueParam && <button type="button" onClick={ () => handleAutoFill(30) } className="relative inline-flex items-center justify-center p-0 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-0 py-0 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                      <div className='flex'>
                        <img src="/samosa_one.png" alt="samosa" className='w-[50px] h-[50px] mt-1 pl-2' />
                        <img src="/samosa_one.png" alt="samosa" className='w-[50px] h-[50px] mt-1 pl-2' />
                        <img src="/samosa_one.png" alt="samosa" className='w-[50px] h-[50px] mt-1 pl-2' />
                      </div>
                    </span>
                  </button> }
                </div>

                <button type="submit" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-3 mb-2">Pay</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  )
}

export default SupportersPage
