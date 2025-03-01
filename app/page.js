import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-white block sm:flex px-9 items-center justify-evenly h-[100vh] sm:h-[81.5vh] ">

<div className="m-auto sm:h-[70vh] sm:w-[40vw] sm:mt-6 mt-8 flex items-center justify-center relative">
        {/* Glowing border */ }
        <div className="absolute sm:h-[31vw] sm:w-[31vw]  h-[81vw] w-[81vw] rounded-full animate-glow"></div>

        {/* Image container */ }
        <div className="relative bg-fuchsia-800 rounded-full sm:h-[30vw] sm:w-[30vw] h-[80vw] w-[80vw] overflow-hidden border-[5px] border-transparent">
          <img src="/self.gif" alt="Profile" className="absolute left-0 top-10" />
        </div>
      </div>

      <div className="m-auto  sm:h-[70vh] h-[50vh] sm:w-[40vw]  ">
      <p className="font-bold text-center text-2xl">Full-Stack MERN Developer  </p>
      <p className="font-bold text-center text-2xl">Turning Ideas into Powerful Web Solutions</p>
     <div>
     <div className=" justify-center items-center sm:flex font-bold">
        <p className="mr-4 text-center sm:mt-0 mt-5">Talk Tech & Samosas? I'm In! Just</p>
        <div className="flex justify-center items-center">
        <Link href={ "/buy" }>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center me-0 mb-0">Buy</button></Link><p className="ml-4">Me a</p> <img src="/samosa.gif" alt="" className="h-[100px] w-[100px] ml-4" />
        </div>
          
        </div>
     </div>
       
       
        <div className="my-0 flex justify-around" >
          <div className="flex-col justify-center items-center">
          <Link href={ "/serv" }>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-10 mb-2">Services</button></Link>
          <img src="/services.gif" alt="" className="absolute  sm:right-[28vw]  sm:w-[18vw]  sm:h-[40vh]"/>
          </div>
         <div className="flex-col justify-center items-center">
          <div>
          <Link href={ "/project" }>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-4 mb-0">Projects</button></Link>
          </div>
         <div>
         <img src="/portfolio.gif" alt="" className="absolute  sm:right-[10vw]   sm:w-[18vw] sm:h-[40vh]"/>
         </div>
        
         </div>
          
        </div>
      </div>
      

    </div>
  );
}
