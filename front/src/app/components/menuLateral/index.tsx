import { CgHomeAlt } from "react-icons/cg";
import Link from "next/link";
import { HiMiniMagnifyingGlass,  HiQrCode ,  HiStar, HiOutlineCog8Tooth} from "react-icons/hi2";



export default function MenuLateral(){
    return(

    <div className="hidden md:flex flex-col space-y-3 w-64 bg-white p-4 border-t border-2 border-gray-100 h-full shadow-md ">
        <Link href={'/homeConsumidor'}  className="flex items-center space-x-2 text-gray-900  hover:bg-green-600 
                             rounded-lg  hover:text-white transition p-2" >
                                 <CgHomeAlt size={25} />
                                 <span>Dashboard</span> 
                            </Link>
                        
                         <Link href={'/consultarProducto'}  className="flex items-center space-x-2 text-gray-900  hover:bg-green-600 
                             rounded-lg  hover:text-white transition p-2" >
                                 <HiQrCode size={25} />
                            <span> Consultar producto</span>
                         </Link>
                        <Link href={'/avaliarProductor'}  className="flex items-center space-x-2 text-gray-900  hover:bg-green-600 
                             rounded-lg  hover:text-white transition p-2" > 
                             <HiMiniMagnifyingGlass size={25} />
                            <span> Pesquisar productores</span>
                        </Link>
                         <Link href={'/avaliarProductor'}  className="flex items-center space-x-2 text-gray-900  hover:bg-green-600 
                             rounded-lg  hover:text-white transition p-2" > 
                             <HiStar size={25}/>
                            <span> Avaliar productos</span>
                        </Link>
                        <Link href={'/avaliarProductor'}  className="flex items-center space-x-2 text-gray-900  hover:bg-green-600 
                             rounded-lg  hover:text-white transition p-2" >  
                             <CgHomeAlt size={25} />
                            <span> Histórico de produtos</span>
                       </Link>
                        <Link href={'/avaliarProductor'}  className="flex items-center space-x-2 text-gray-900  hover:bg-green-600 
                             rounded-lg  hover:text-white transition p-2" >  
                             <HiOutlineCog8Tooth size={25} />
                            <span> Configurações</span>
                         </Link>
                        
    </div>
    )

}