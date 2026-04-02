import HeaderConsumidor from "../components/headerConsumidor";
import MenuLateral from "../components/menuLateral";
import { ReactNode } from "react";

export default function AuthLayout({ children }:{ children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
       <HeaderConsumidor/>

      <div className="flex flex-1 pt-16">
        <aside className="hidden md:block w-64 bg-white border-r border-gray-200">
           <MenuLateral/>
        </aside>

          <main className="flex-1 p-4 md:p-6 bg-gray-50 w-full">
            {children} 
          </main>

         </div>
      </div>
  );
}