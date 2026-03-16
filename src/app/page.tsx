import Link from "next/link";
import bg from '../img/fd4.jpeg'
import ImgSobre from '../img/fd5.jpeg'
import Image from "next/image";
import { ClipboardEdit, ShieldCheck, QrCode, Search , MapPinned, BadgeCheck, Eye, ShieldPlus, ArrowRight, Users2, HousePlus, MapPin, ArrowLeftCircle, ArrowRightCircle} from 'lucide-react';
import SectionProducto from "./components/sectionProducto";


const cardPassos = [
  {
    icon: <ClipboardEdit size={32} />,
    h1: 'Productor Regista',
    p: 'O productor regista o lote e as condições de produção no sistema.'
  },
  {
    icon: <ShieldCheck size={32} />,
    h1: 'Certificação',
    p: 'O producto é verificado e certificado pela autoridade sanitária.'
  },
  {
    icon: <QrCode size={32} />,
    h1: 'QR Code Gerado',
    p: 'O sistema gera um QR Code único para o rastreio do lote.'
  },
  {
    icon: <Search size={32} />,
    h1: 'Rastreamento',
    p: 'O consumidor consulta toda a cadeia através do código.'
  },
]

const cardFuncionalidades = [
  {
    icon: <MapPinned size={32} className="text-green-600" />, 
    title: 'Rastreamento Completo', 
    description: 'Acompanhe todo o percurso do produto desde a origem até o consumidor final.'
  },
  {
    icon: <BadgeCheck size={32} className="text-green-600" />, 
    title: 'Certificação Digital', 
    description: 'Sistema de certificação sanitária integrado e seguro para cada lote.'
  },
  {
    icon: <Eye size={32} className="text-green-600" />, 
    title: 'Transparência Total', 
    description: 'Informações verificáveis sobre produção, transporte e armazenamento.'
  },
  {
    icon: <ShieldPlus size={32} className="text-green-600" />, 
    title: 'Segurança Alimentar', 
    description: 'Garantia de qualidade e conformidade com as normas sanitárias vigentes.'
  }
]

const estatistica = [
  { total: '500+', description: 'Productores Cadastrados', p: 'Agricultores e processadores em nossa rede' },
  { total: '2M+', description: 'Productos Rastreados', p: 'Itens com histórico completo de origem' },
  { total: '98%', description: 'Redução de Incidentes', p: 'Menos casos de contaminação e fraude' },
  { total: '24/7', description: 'Monitoramento', p: 'Acompanhamento em tempo real' }
]

export default function Home() {
  return (
    <div>
      <div>
        
        <section className="w-full min-h-[75vh] grid grid-cols-1 md:grid-cols-2 bg-[#F5EBD2]">
          
          <div className="flex items-center justify-center px-8 md:pl-16 lg:pl-24 py-10">
            <div className="space-y-5 max-w-xl">
              <p className="text-sm md:text-base text-zinc-500 font-medium tracking-wide uppercase"> Sistema Integrado de Rastreabilidade</p>
              
              <h1 className="text-5xl md:text-5xl font-bold text-zinc-800 leading-tight">Origem <span className="text-green-600">100%</span> Certa </h1>
              
              <p className="text-lg text-zinc-700 leading-relaxed max-w-md">Acompanhe a jornada do seu alimento, do campo à mesa, com transparência total e segurança digital.</p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-200 transition-all transform hover:-translate-y-1 cursor-pointer"> Rastrear Producto</button>
                
                <button className="bg-transparent border-2 border-zinc-800 text-zinc-800 hover:bg-zinc-800 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-101 cursor-pointer">Começar Agora</button>
              </div>
               <div className="border-t pl-4 border-white/50  pt-2 grid grid-cols-4">
              {
                estatistica.map((item, index) => (
                   <div key={index} className="">
                    <h2 className="font-bold text-4xl text-green-600">{item.total}</h2>
                    <p className="font-semibold text-sm text-zinc-800">{item.description}</p>
                  </div>
                ))
              }
          </div>    
            </div>
          </div>

          <div className="relative flex justify-center items-center overflow-hidden p-8 md:p-0">
            <Image  priority src={bg}  alt="Cesta de alimentos frescos" className="object-contain w-full h-auto max-h-[70vh] drop-shadow-2xl"  />
          </div>
        </section>
        <section className="grid grid-cols-4 max-w-6xl gap-4 mx-auto py-8 px-4">
          {
            cardPassos.map((item, index) => (
            <div key={index} className={`flex gap-2 items-center justify-center p-2 ${(index === cardPassos.length - 1) ? '' : 'border-r border-zinc-400'}`}>
              <span className="text-green-600">{item.icon}</span>
              <div className="space-y-2">
                <h3 className="font-semibold text-xl text-center">{item.h1}</h3>
                <p className="text-zinc-700 text-center">{item.p}</p>
              </div>
            </div>
            ))
          }
        </section>

        <section  className="w-full bg-zinc-50 mx-auto h-80 mb-8">
          <div className="w-full max-w-5xl mx-auto grid grid-cols-1  md:grid-cols-3">
            <div className="relative flex justify-center h-80 items-center overflow-hidden md:p-10 p-2">
              <Image  priority src={ImgSobre}  alt="Cesta de alimentos frescos" className="object-contain w-full h-auto "  />
            </div>
            
            <div className=" col-span-2 flex items-center justify-center">
              <div className="space-y-4 px-8">
                <div className=" mb-12">
                  <h2 className="text-3xl md:text-3xl font-bold text-zinc-800">Quem Somos?</h2>
                  <div className="w-20 h-1 bg-green-600 mt-4 rounded-full"></div>
                </div>
                <p className=" text-zinc-800 leading-relaxed"> Somos uma equipa dedicada ao desenvolvimento do Origem Certa, um sistema inovador de rastreabilidade da cadeia alimentar. 
                  Acreditamos que a tecnologia pode ser uma aliada fundamental para garantir transparência, segurança e confiança no setor 
                  alimentar, ligando productores e consumidores através de informação clara e acessível.</p>
              </div>
            </div>
          </div>
           
        </section>

        <SectionProducto/>

        <section className="py-10 w-full h-full bg-zinc-50"> 
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-3xl font-bold text-zinc-800"> Funcionalidades Principais</h2>
              <div className="w-20 h-1 bg-green-600 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cardFuncionalidades.map((item, index) => (
                <div key={index} 
                  className="group w-full rounded-3xl bg-white border border-zinc-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300" >
                  <div className={`mb-6 w-14 h-14 flex items-center justify-center rounded-2xl text-white bg-green-200/20
                   shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-xl text-zinc-800 mb-2"> {item.title} </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed"> {item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      <section>
        <div className="flex items-center justify-center py-4">
          <div className="max-w-3xl h-full space-y-4 ">
            
            <h1 className="font-bold text-3xl text-center">Pronto para transformar sua cadeia de abastecimento?</h1>
              <div className="w-20 h-1 bg-green-600 mx-auto mt-4 rounded-full"></div>
            <p className=" text-center text-zinc-800">Junte-se a centenas de productores e distribuidores que já confiam no Origem Certa para garantir a transparência e segurança dos seus productos.</p>
            <div className="flex pl-4 items-center justify-center gap-4 pt-4">
                <Link href={'/produtor'}>
                    <button className="bg-[#F5EBD2] hover:scale-101 hover:bg-[#f8ebc8] transition-all shadow-green-200 transform hover:-translate-y-1 cursor-pointer px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2"> <HousePlus/>Sou Productor<ArrowRight/></button>
                </Link>
                <Link href={'/consumidor'}>
                    <button className=" bg-green-600  hover:scale-101 hover:bg-green-500 transition-all px-8 py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 cursor-pointer"><Users2 /> Sou Consumidor<ArrowRight/></button>
                </Link>
            </div>
            <p className="font-bold text-center text-zin-600 text-sm">Registo gratuito. Comece a rastrear produtos hoje mesmo.</p>
          </div>
        </div>
        
      </section>
      
      </div>
    </div>
  )
}