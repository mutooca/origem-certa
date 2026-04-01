'use client'
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { zodResolver } from '@hookform/Resolvers/zod';
import Image from 'next/image';
import wap from '../../../img/wap.jpeg';
import { HiArrowLeft } from "react-icons/hi";
import { LuMail, LuLock, LuLogIn } from "react-icons/lu";
import Link from 'next/link';

const sanitizeEmail = (value: string) => value?.trim().toLowerCase().replace(/\s+/g, '').replace(/[<>'"]/g, '').slice(0, 70) || "";

const loginSchema = z.object({
 email: z.string().min(1, 'O e-mail é obrigatório').transform(sanitizeEmail).refine(val => val.length > 0, 'O e-mail não pode estar vazio')
     .pipe(z.string().max(80, 'O e-mail é demasiado longo').regex(/^[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, 'Formato de e-mail inválido')
     .refine(val => !val.includes('..'), 'E-mail não pode conter pontos consecutivos').refine(val => val.split('@')[0].length <= 64, 'A parte local do e-mail é demasiado longa')),
     

 password:z.string().min(1, 'A palavra-passe é obrigatória').min(6, 'A palavra-passe deve ter no mínimo 8 caracteres').max(64, 'A palavra-passe é demasiado longa')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]+$/, 'A palavra-passe deve conter: maiúscula, minúscula, número e caractere especial (@$!%*?&#)')
    .refine(val => !val.match(/(.)\1{2,}/), 'A palavra-passe não pode ter caracteres repetidos consecutivamente')
    .refine(val => !['12345678', 'password', 'senha123', 'admin123', 'qwerty123'].some(weak => val.toLowerCase().includes(weak)), 'A palavra-passe é muito fraca. Evite sequências comuns')

});

type loginData = z.infer<typeof loginSchema>;

export default function Entrar() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<loginData>({
    resolver: zodResolver(loginSchema)
  });

  const router = useRouter();

  async function handleLogin(data: loginData) {
    try {
      console.log(data);
      await new Promise(res => setTimeout(res, 1000));
      toast.success("Login realizado com sucesso.", { duration: 4000 });
      setTimeout(() => router.push("/consumidor"), 1500);
    } catch {
      toast.error("Erro ao logar. Tente novamente.", { duration: 4000 });
    }
  }

  return (
    <div className="flex h-screen bg-[#F5EBD2]/60 gap-12">
      
      <div className="hidden md:flex w-1/2 h-full relative overflow-hidden">
        <Image src={wap} fill priority alt="" className='object-cover' />
        <div className="flex flex-col absolute inset-0 items-center justify-center bg-green-700/50 text-white">
         <div className="flex rounded-lg p-4 bg-white/50 border items-center justify-center text-white mb-4"><LuLogIn size={40} /></div>
          <h2 className="text-2xl font-semibold">Bem-vindo de volta</h2>
          <p className='mt-6'>Acesse sua conta para rastrear produtos, verificar a <br /> origem dos alimentos e garantir a segurança da sua <br /> cadeia alimentar.</p>
        </div>
      </div>

      <div className="flex flex-col md:w-1/2 justify-center items-center w-full h-full p-6 overflow-y-auto">
        <div className="flex flex-col space-y-4 mr-50 ">
          <Link href="/"><button className="text-zinc-600 text-xs flex gap-1 cursor-pointer mt-10"><HiArrowLeft size={18}/> Voltar ao início</button></Link>
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">O</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Origem<span className="text-green-600">Certa</span></span>
          </div>
        </div>

        <div className="w-full max-w-sm mx-auto aspect-square flex flex-col gap-4 shadow-2xl p-6 mt-6 bg-white rounded-xl">
          <h2 className="text-xl font-semibold">Bem-vindo de volta</h2>
          <p className="text-xs text-zinc-600 ">Introduza as suas credenciais para aceder ao sistema</p>

          <form onSubmit={handleSubmit(handleLogin)} className="space-y-2">
           
            <div className="flex flex-col space-y-1 mt-1">
              <label htmlFor="email" className="text-sm text-zinc-800">E-mail</label>
              <div className="relative">
                <LuMail className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' size={14}/>
                <input {...register("email")} type="email" disabled={isSubmitting} placeholder='mutoocamaria@gmail.com' className="text-xs w-full h-10 rounded-lg pl-8 bg-gray-50 outline-green-600 border border-gray-200"/>
              </div>
              {errors.email && <p className="text-xs text-red-600">{errors.email.message}</p>}
            </div>

        
            <div className="flex flex-col space-y-1 mt-2">
              <label htmlFor="password" className="text-sm text-zinc-800">Palavra-passe</label>
              <div className="relative">
                <LuLock className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' size={14}/>
                <input {...register("password")} type="password" disabled={isSubmitting} placeholder='••••••••' className="text-xs w-full h-10 rounded-lg pl-8 bg-gray-50 outline-green-600 border border-gray-200"/>
              </div>
              {errors.password && <p className="text-xs text-red-600">{errors.password.message}</p>}
             
            </div>
            <div className="flex flex-col justify-between">
                <Link href="/recuperar-senha" className='text-green-700 text-xs houver:underline transition'>Esqueceu a senha?</Link>
            </div>
            <button type='submit' disabled={isSubmitting} className="p-2 w-full bg-green-600 rounded-lg text-white mt-2 hover:bg-green-700 disabled:opacity-80 disabled:cursor-not-allowed">{isSubmitting ? 'Entrando...' : 'Entrar'}</button>
          </form>

          <p className="text-sm text-zinc-600 text-center ">Ainda não tem conta? <Link href={"/cadastro"} className='text-green-700 hover:underline'>Criar conta</Link></p>
        </div>
      </div>
    </div>
  );
}


