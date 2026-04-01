'use client'
import { useForm } from 'react-hook-form';
import { useSearchParams, useRouter } from 'next/navigation';
import { z } from 'zod';
import { zodResolver } from '@hookform/Resolvers/zod';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { LuLock } from "react-icons/lu";
import SectionLogin from '../../components/sectionLogin';


const schema = z.object({
  password: z.string()
    .min(8, "Mínimo 8 caracteres")
    .max(64)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])/, 
      "Inclua maiúscula, minúscula, número e símbolo"),

  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "As palavras-passe não coincidem",
  path: ["confirmPassword"]
});


type formData=z.infer<typeof schema >;

export default function(){

  const {register, handleSubmit, formState: {errors, isSubmitting}}= useForm<formData>({
    resolver: zodResolver(schema)
  })
  
  const router = useRouter();
  const params = useSearchParams();

  const [validToken, setValidToken] = useState(false);
  const [loading, setLoading ] = useState(true);

  const token = params.get('token');

  useEffect(()=>{
    const savedToken = localStorage.getItem('resetToken');
    const expires = localStorage.getItem('resetExpires');
    
    if(!token || token !== savedToken){
      toast.error('Token inválido'),
      setValidToken(false)
    }else if(Date.now() > Number(expires)){
      toast.error('Token expirado')
    }else{
      setValidToken(true)
    } 
    setLoading(false)
  }, [token])
  

  async function onSubmit(data: formData){
      try{
       await new Promise(res => setTimeout(res, 1000));

       localStorage.removeItem('resetToken');
       localStorage.removeItem('resetEmail');
       localStorage.removeItem('resetExpires');

       toast.success("Senha redefinida com sucesso!");
       setTimeout(()=>{
         router.push('/entrar')
       }, 2000)
      
  }catch(error){
    toast.error('Erro ao redefinir senha.')
  }
  }

  if(loading) return <div className="min-h-screen flex items-center justify-center">A carregar Link...</div>

  if(!validToken){
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="rounded-xl shadow-xl p-6 bg-white text-center">
          <p className="text-lg font-semibold">Link inválido ou expirado</p>
        </div>
      </div>
    )

  }
  return(
    <div className="h-screen bg-[#F5EBD2]/50 flex">
        <SectionLogin/>

        <div className="flex flex-col items-center justify-center w-full  md:w-1/2 p-6">
            <div className="shadow-lg rounded-2xl p-6 max-w-sm bg-white w-full">
               <div className="flex flex-col items-center mb-4">
                  <LuLock size={30} className='text-green-600'/>
                  <p className="text-xl font-semibold mt-2">Redefinir senha</p>
               </div>

               <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                   <div className="flex flex-col space-y-1 mt-2">
                      <label htmlFor="password" className="text-sm text-zinc-800">Palavra-passe</label>
                      <div className="relative">
                        <LuLock className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' size={14}/>
                        <input {...register("password")} type="password" disabled={isSubmitting} placeholder='Nova palavra-passe' className="text-xs w-full h-10 rounded-lg pl-8 bg-gray-50 outline-green-600 border border-gray-200"/>
                      </div>
                      {errors.password && <p className="text-xs text-red-600">{errors.password.message}</p>}
                  </div>
                  <div className="flex flex-col space-y-1 mt-2">
                      <label htmlFor="confirmPassword" className="text-sm text-zinc-800">Palavra-passe</label>
                      <div className="relative">
                        <LuLock className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' size={14}/>
                        <input {...register("confirmPassword")} type="password" disabled={isSubmitting} placeholder='Confirmar palavra-passe' className="text-xs w-full h-10 rounded-lg pl-8 bg-gray-50 outline-green-600 border border-gray-200"/>
                      </div>
                      {errors.password && <p className="text-xs text-red-600">{errors.password.message}</p>}
                  </div>
                  <button type='submit' disabled={isSubmitting} className="p-2 w-full bg-green-600 rounded-lg text-white mt-2 hover:bg-green-700 disabled:opacity-80 disabled:cursor-not-allowed">
              {isSubmitting ? "Redefinindo..." : "Redefinir senha"}</button>
               </form>
            </div>
        </div>
    </div>
  )
}