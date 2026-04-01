'use client'
import { useState } from "react";
import { PiXBold } from "react-icons/pi";
import { HiOutlineMenu } from "react-icons/hi";
import { CgHomeAlt } from "react-icons/cg";
import Link from "next/link";
import { HiMiniMagnifyingGlass,  HiQrCode ,  HiStar, HiOutlineCog8Tooth} from "react-icons/hi2";
import logado from '../../../img/logado.png'
import Image from "next/image";
import { LuLogOut } from "react-icons/lu";


export default function HeaderConsumidor(){
    const [menuOpen, setMenuOpen] = useState(false);
    const [perfil, setPerfil] = useState(false);
    const closeMenu = ()=>setMenuOpen(false);
    const closePerfil = ()=> setPerfil(false)

    return(
        <div className="">
        <header className="bg-white shadow-sm  border-b border-gray-100 fixed top-0 z-10  w-full">
            <div className="max-w-6xl px-1 py-4  mx-auto ">
                <div className="flex  justify-between h-8">

                    <div className="flex items-center space-x-2 top-1/2 md:hidden">
                        <button onClick={()=>setMenuOpen(true) } className="text-black text-md cursor-pointer "><HiOutlineMenu size={20}/>
</button>               <span className="font-semibold">Consumidor</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-2 ">
                        <button className="w-8 h-8 rounded-lg bg-green-600 text-white text-center font-bold text-xl">O</button>
                        <div className="">
                            <span className="text-xl font-bold text-gray-800">Origem<span className="text-green-600">Certa</span></span>       
                        </div>
                         
                    </div>
                    
                    <div className="flex items-center ">
                        <div className="flex">
                            <Image src={logado} alt="Imagem de pessoa logada " className="w-12 h-12 rounded-full p-2 cursor-pointer" onClick={()=>setPerfil(true)}/>
                            
                        </div>
                        <div className="">
                          <span  className="font-semibold text-gray-800 ">Maria Mutoca</span>  
                        </div>
                        <Link href={'/'}> 
                        <button className="flex items-center text-gray-800 font-semibold ml-3 cursor-pointer px-3 py-2 rounded-lg bg-gray-50 text-xs space-x-3 border border-gray-200 hover:bg-green-600 hover:text-white hover:shadow-md shadow-green-200"><LuLogOut size={14}/> Sair</button>
                        </Link>
                    </div>
                </div>

            </div>

        </header>


        {menuOpen  &&  ( <div className="fixed bg-black/50 inset-0 transition-opacity z-20" onClick={closeMenu}/>)}
         {menuOpen &&(
            <div className={`fixed top-0 h-full w-65 bg-white transform transition-transform ease-in-out 
                duration-300 z-30  shadow-lg ${menuOpen? 'translate-x-0': 'translate-x-full'}`}>

                    <div className="flex justify-between p-4 space-x-1">
                        <div className="flex items-center space-x-2 ">
                            <button className="w-8 h-8 rounded-lg bg-green-600 text-white text-center font-bold text-md">O</button>
                            <div className="">
                                <span className="text-xl font-bold text-gray-800">Origem<span className="text-green-600">Certa</span></span>       
                            </div>
                        </div>
                        <button onClick={closeMenu} className="text-black text-md cursor-pointer"><PiXBold size={20} /></button>   
                    </div>
                     <div className="flex w-full  h-1 bg-gray-100 "></div>
                    <div className="flex flex-col space-y-2 p-4">
                         
                            <Link href={'/dashboard'}  className="flex items-center space-x-2 text-gray-900  hover:bg-green-600 
                             rounded-lg  hover:text-white transition p-2" onClick={closeMenu}>
                                 <CgHomeAlt size={25} />
                                 <span>Dashboard</span> 
                            </Link>
                        
                         <Link href={'/consultarProducto'}  className="flex items-center space-x-2 text-gray-900  hover:bg-green-600 
                             rounded-lg  hover:text-white transition p-2" onClick={closeMenu}>
                                 <HiQrCode size={25} />
                            <span> Consultar producto</span>
                         </Link>
                        <Link href={'/avaliarProductor'}  className="flex items-center space-x-2 text-gray-900  hover:bg-green-600 
                             rounded-lg  hover:text-white transition p-2" onClick={closeMenu}> 
                             <HiMiniMagnifyingGlass size={25} />
                            <span> Pesquisar productores</span>
                        </Link>
                         <Link href={'/avaliarProductor'}  className="flex items-center space-x-2 text-gray-900  hover:bg-green-600 
                             rounded-lg  hover:text-white transition p-2" onClick={closeMenu}> 
                             <HiStar size={25}/>
                            <span> Avaliar productos</span>
                        </Link>
                        <Link href={'/avaliarProductor'}  className="flex items-center space-x-2 text-gray-900  hover:bg-green-600 
                             rounded-lg  hover:text-white transition p-2" onClick={closeMenu}>  
                             <CgHomeAlt size={25} />
                            <span> Histórico de produtos</span>
                       </Link>
                        <Link href={'/avaliarProductor'}  className="flex items-center space-x-2 text-gray-900  hover:bg-green-600 
                             rounded-lg  hover:text-white transition p-2" onClick={closeMenu}>  
                             <HiOutlineCog8Tooth size={25} />
                            <span> Configurações</span>
                         </Link>
                        
                       
                        
                    </div>
                </div>
                )}

                {
                    perfil && (<div className="fixed bg-gray-900/80 inset-0 transition-opacity z-20 flex " />)
                }
                 {
                    perfil && (<div className=" fixed flex flex-col items-center justify-center p-4 z-50 rounded-lg shadow-lg max-w-md mt-50  bg-white" >
                        <form action="" className="space-y-2">
                            <input type="text" className=""  placeholder="nomw"/>
                            <input type="text" className="" placeholder="nomw" />
                            <button className="cursor-pointer bg-amber-200 rounded-lg" onClick={closePerfil}>Definir</button>
                        </form>
                     </div> )
                }
    </div>
    )
}