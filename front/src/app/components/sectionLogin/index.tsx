import { LuKeyRound } from "react-icons/lu";
import { MdLens } from "react-icons/md";
import Image from "next/image";
import wap from '../../../img/wap.jpeg';

export default function(){
   
     const lista=[
            {icon: <MdLens size={14} className='text-white'/>, li:"Recuperação segura por email"},
            {icon: <MdLens size={14} className='text-white'/>, li:"Link válido por 24 horas"},
            {icon: <MdLens size={14} className='text-white'/>, li:"Proteção da sua conta"}];
            return(
                 <div className="hidden md:flex w-1/2 h-full relative  overflow-hidden ">
                    <Image src={wap} alt="Imagem de fundo a esquerda" fill priority className="object-cover"/>
                    <div className="absolute flex flex-col items-center justify-center inset-0 bg-green-600/50 space-y-2 text-white">
                        <div className="bg-white/50 border rounded-lg mb-4 p-4"><LuKeyRound size={40}/></div>
                        <h1 className="font-semibold text-2xl md:text-3xl">ORIGEM CERTA</h1>
                        <h2 className="text-xl">Recuperação de acesso ao sistema</h2>
                        <div className="flex flex-col ml-10 gap-1 mt-2">
                            {
                            lista.map((item, index) => (
                            <div key={index} className="mt-2 flex space-x-2 ">
                                <p className='flex items-center space-x-4 gap-2'><span>{item.icon}</span> {item.li}</p>
                            </div>
                            ))
                            }
                    
                        </div>
                    </div>
            </div>
            )
}