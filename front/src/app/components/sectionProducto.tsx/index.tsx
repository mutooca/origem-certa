'use client'
import { ArrowLeftCircle, ArrowRight, ArrowRightCircle, MapPin } from "lucide-react";
import Image from "next/image";
import imgTomate from '../../../img/tomatoes.jpg'
import imgMeat from '../../../img/meat.jpg'
import imgMilk from '../../../img/milk.jpg'
import imgvegetables from '../../../img/vegetables.jpg'
import imgFish from '../../../img/fish.jpg'
import { useState } from "react";
const cardProductos = [
  {
    img: imgTomate, nome: 'Tomate Orgânico', categoria: 'Hortícolas', localProducao: 'Fazenda Sol Nascente', localidadeLocal: 'Catumbela, Benguela'
  },
  {
    img: imgMeat, nome: 'Carne Bovina Premium', categoria: 'Carnes', localProducao: 'Quinta do Vale', localidadeLocal: 'Huambo'
  },
  {
    img: imgFish, nome: 'Peixe Fresco', categoria: 'Pescado', localProducao: 'Pescadores de Luanda', localidadeLocal: 'Porto de Luanda'
  },
  {
    img: imgvegetables, nome: 'Vegetais Variados', categoria: 'Hortícolas', localProducao: 'Fazenda Sol Nascente', localidadeLocal: 'Catumbela, Benguela'
  },
  {
    img: imgMilk, nome: 'Leite Fresco', categoria: 'Lacticínios', localProducao: 'Cooperativa Verde Angola', localidadeLocal: 'Kifangondo, Luanda'
  },
]

export default function SectionProducto(){
    const [startIndex, setStartIndex] = useState(0)
    const visibilitePage = 4
    const productVisible = cardProductos.slice(startIndex, startIndex + visibilitePage)

    const next = () => {
        if(startIndex + visibilitePage < cardProductos.length)
            setStartIndex(startIndex + 1)
    }
    const prev = () => {
        if(startIndex > 0)
            setStartIndex(startIndex - 1)
    }
    return(

        <section className="w-full h-full p-4 ">
            <div className="text-zinc-800 text-center mx-auto max-w-3xl pb-4 space-y-4 ">
            <h1 className="font-bold text-xl text-center">Conheça a origem dos seus alimentos</h1>
            <div className="w-20 h-1 bg-green-600 mx-auto mt-4 rounded-full"></div>
            <p className=" text-center text-zinc-800">Milhares de productos já rastreados na nossa plataforma. Cada alimento com sua história, desde a produção até sua mesa.</p>
            </div>
            <div className="flex items-center justify-center gap-4">
                <button onClick={prev} className={`rounded-full p-2 transition-all text-zinc-500 ${startIndex > 0 ? 'hover:text-zinc-700 hover:bg-zinc-100 cursor-pointer' : 'cursor-not-allowed text-zinc-200'}`}><ArrowLeftCircle size={35} /></button>
                <div className="grid grid-cols-4 gap-4 max-w-7xl mx-auto ">
                {
                productVisible.map((item, index) => (
                <div key={index} className="group relative bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden transition-all p-4">
                    <span className={`left-8 top-8 absolute px-3 py-1 rounded-full text-sm z-10 ${item.categoria === 'Hortícolas' ? 'bg-green-600 text-white' : 'text-zinc-800 bg-zinc-100'}`}>{item.categoria === 'Hortícolas' ? 'Orgânico' : 'Certificado' }</span>
                    
                    <div className="relative h-48 w-full overflow-hidden rounded-2xl">
                    <Image 
                        src={item.img} alt={`Img n: ${index}`} fill
                        className="rounded-2xl object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                    </div>
                    <div className="mt-4 space-y-3">
                        <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-bold text-zinc-800 text-lg">{item.nome}</h3>
                            <p className="text-zinc-500 text-sm">{item.categoria}</p>
                        </div>
                        </div>
                        
                        <div className="pt-2 border-t border-zinc-100 flex items-center gap-6 text-zinc-600">
                            <p className="text-xs font-medium flex items-center justify-center gap-2"><MapPin size={18}/> {item.localProducao} — {item.localidadeLocal}</p>
                            <button className="  hover:underline text-sm cursor-pointer text-green-700 font-semibold flex items-center justify-center gap-1"> Ver<ArrowRight size={18}/></button>
                        </div>
                    </div>
                </div>
                ))
                }
            </div>
            <button onClick={next} className={`rounded-full p-2 transition-all text-zinc-500 ${startIndex + visibilitePage < cardProductos.length ? 'hover:text-zinc-700 hover:bg-zinc-100 cursor-pointer' : 'cursor-not-allowed text-zinc-200'}`}><ArrowRightCircle size={35} /></button>
            </div>
            
        </section>
        
    )
}