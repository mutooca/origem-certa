
import Link from 'next/link'


export default function Footer(){
    return (
        <footer className="w-full max-h-full bg-green-700 ">
            <div className='w-full p-4 gap-8 grid grid-cols-4'>
                <div className="max-w-full h-full mx-auto space-y-4 py-4">
                     <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">O</span>
                        </div>
                        <span className="text-xl font-bold text-gray-100">Origem<span className="text-amber-400">Certa</span></span>
                    </div>
                    <p className="font-bold text-white text-sm">Sistema de rastreabilidade que garante transparência e segurança na cadeia alimentar angolana.</p>
                    
                    <div>
                    </div>
                </div>
                <div className="flex flex-col  gap-2 space-y-1 ">
                    
                    <h2 className='font-bold text-amber-400 text-lg'>Links Rápidos</h2>
                    <Link   href={'/'} className="text-white hover:text-amber-400 transition-colors duration-200 text-sm font-bold">Inicio</Link>
                    <Link   href={'/entrar'} className="text-white hover:text-amber-400 transition-colors duration-200 text-sm font-bold">Entrar</Link>
                    <Link   href={'cadastro'} className="text-white hover:text-amber-400 transition-colors duration-200 text-sm font-bold">Cadastrar</Link>
                    <Link   href={'rastrear'} className="text-white hover:text-amber-400 transition-colors duration-200 text-sm font-bold">Rastrear Producto</Link>

                </div>
                <div className='flex  h-full justify-center'>
                    <div className="flex flex-col  gap-2 space-y-1 ">
                        
                    <h2 className='font-bold text-amber-400 text-lg'>Funcionalidades</h2>
                       <p className="text-white hover:text-amber-400 transition-colors duration-200 text-sm font-bold">Rastreamento Completo</p>
                       <p className="text-white hover:text-amber-400 transition-colors duration-200 text-sm font-bold">Certificação Digital</p>
                       <p className="text-white hover:text-amber-400 transition-colors duration-200 text-sm font-bold">Transparência Total</p>
                       <p className="text-white hover:text-amber-400 transition-colors duration-200 text-sm font-bold">Segurança Alimentar</p>
                    </div>
                </div>

                <div className='flex  h-full justify-center'>
                    <div className="flex flex-col  gap-2 space-y-1 ">
                        
                    <h2 className='font-bold text-amber-400 text-lg'>Contactos</h2>
                       <p className="text-white hover:text-amber-400 transition-colors duration-200 text-sm font-bold">Email: info@siraca.ao</p>
                       <p className="text-white hover:text-amber-400 transition-colors duration-200 text-sm font-bold">Tel: +244 XXX XXX XXX</p>
                       <p className="text-white hover:text-amber-400 transition-colors duration-200 text-sm font-bold">Luanda, Angola</p>
                       <p className="text-white hover:text-amber-400 transition-colors duration-200 text-sm font-bold"></p>
                    </div>
                </div>
               
            </div>
            <div className='border-t border-zinc-400'>
                <div className='flex justify-center p-4'>
                    <p className='font-bold text-white text-sm'>© 2025 SIRACA - Sistema de Rastreabilidade da Cadeia de Abastecimento Alimentar. Todos os direitos reservados.</p>
                    
                </div>
            </div>
        </footer>
    )
}