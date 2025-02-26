import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-white flex px-9 items-center justify-evenly min-h-[81.5vh]">

      <div className="m-auto  h-[70vh] w-[40vw]  ">
        <div className="items-center flex font-extrabold">
          <Link href={ "/buy" }>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-1 text-center me-1 mb-0">Buy</button></Link> Me a <img src="/samosa.gif" alt="" className="h-[100px] w-[100px]" />
        </div>
        <p className="font-extrabold">this is my portfolio website if you liked my work you can help me by buying me a plate of samosa</p>
        <div className="my-11 flex justify-around" >
          <div>
          <Link href={ "/serv" }>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-10 mb-2">Services</button></Link>
          <img src="/services.gif" alt="" className="absolute left-[10vw]"/>
          </div>
         <div>
         <Link href={ "/portfolio" }>
         <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-10 mb-0">Portfolio</button></Link>
         <img src="/portfolio.gif" alt="" className="absolute left-[29vw]"/>
         </div>
          
        </div>
      </div>
      <div className="m-auto h-[70vh] w-[40vw] flex items-center justify-center relative">
        {/* Glowing border */ }
        <div className="absolute h-[34vw] w-[34vw] rounded-full animate-glow"></div>

        {/* Image container */ }
        <div className="relative bg-fuchsia-800 rounded-full h-[31vw] w-[31vw] overflow-hidden border-[5px] border-transparent">
          <img src="/samosa radio.gif" alt="" className="absolute left-[5vw] top-[10vw] z-10 w-[250px] h-[250px]" />
          <img src="/self.png" alt="Profile" className="absolute left-8" />
        </div>
      </div>

    </div>
  );
}
