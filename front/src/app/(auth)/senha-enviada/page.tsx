'use client'
import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";
import { useState, useEffect } from "react";
import SectionLogin from "../../components/sectionLogin";

interface emailEnviado{
    email:string;
    estado: false
}

export default function(){
    const  [emails, setEmails] = useState<emailEnviado[]>([]);

    return(
        <div className="flex h-screen bg-[#F5EBD2]/50 gap-12"> 
                <SectionLogin />
              
           <div className="flex flex-col items-center justify-center md:w-1/2 h-full ">

                <div className="flex flex-col items-center justify-center space-y-2 rounded-lg shadow-2xl px-6 py-8 bg-white">
                        <FiCheckCircle size={40} className="bg-green-100 rounded-full p-2 text-green-400 " />
                        <h2 className="text-xl font-semibold ">E-mail enviado!</h2>
                        <p className="text-zinc-600 text-xs">Enviámos um link de recuperação para:</p>
                        <p className="text-zinc-800 text-xs">mutoocamaria@gmail.com</p>
                        <p className="mt-4 text-xs text-zinc-600">Verifique a sua caixa de entrada e a pasta de spam. O link <br /> expira em 24 horas.</p>
                  
                    <div className="flex flex-col mt-6 gap-2">
                        <Link href="/recuperar-senha" >
                        <button className="border border-gray-200 rounded-lg bg-zinc-50 px-24 py-2  text-xs text-center text-zinc-500 font-semibold cursor-pointer
                         hover:bg-green-600 hover:text-white transition">Tentar outro e-mail</button>
                        </Link>
                        <Link href={"/entrar"} >
                            <button className="rounded-lg  text-center text-xs px-28 py-2 bg-green-600 text-white font-semibold cursor-pointer ">Voltar ao login</button>
                        </Link> 
                         
                    </div>
                </div>
           </div>
        </div>
    )
}