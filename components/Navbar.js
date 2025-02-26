"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from 'react'

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='bg-mirage-950 text-white flex justify-between px-4 h-16 items-center'>
      <div className="logo font-bold">
        <div className="items-center flex">
          <img src="/samosa.gif" alt="" className="h-[100px] w-[100px]" />
        </div>
      </div>
      <ul className='font-bold gap-4 flex '>
        <li className="">
        {pathname !== "/" && (
          <Link href={"/"}>
         <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Home</button></Link>
        )}
        </li>
        <li> {pathname !== "/buy" && (
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">About</button>
        )}</li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  )
}

export default Navbar
