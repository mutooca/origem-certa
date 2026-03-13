import Link from "next/link";


export function Header(){
    return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-sm border-b border-gray-100">
        
        <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Origem<span className="text-green-600">Certa</span></span>
        </div>

        
        <nav className="hidden md:flex items-center gap-8 text-gray-600 font-semibold">
            <Link href="/" className="hover:text-green-600 transition-colors">Home</Link>
            <Link href="#como-funciona" className="hover:text-green-600 transition-colors">Como Funciona</Link>
            <Link href="/rastrear" className="hover:text-green-600 transition-colors">Rastrear</Link>
            <Link href="/produtor" className="hover:text-green-600 transition-colors">Sou Produtor</Link>
        </nav>

        
        <div className="flex items-center gap-4">
        <Link href="/login" className="text-gray-600 font-semibold hover:text-green-600">Entrar</Link>
        <Link 
            href="/cadastro" 
            className="bg-green-600 text-white px-5 py-2 rounded-full font-medium hover:bg-green-700 transition-all shadow-md shadow-green-200">
            Começar agora
        </Link>
        </div>
    </header>
    )
}