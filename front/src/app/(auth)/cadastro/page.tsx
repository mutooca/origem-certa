'use client'
import {useForm} from 'react-hook-form';
import { useRouter } from 'next/navigation';
import {z} from 'zod';
import {zodResolver} from '@hookform/Resolvers/zod';
import toast from 'react-hot-toast';
import vejetable from '../../../img/vegetables.jpg';
import Image from 'next/image';
import { HiOutlineCheck, HiArrowLeft, HiOutlinePhone } from "react-icons/hi";
import { LuUser, LuMail, LuLock } from "react-icons/lu";
import Link from 'next/link';


const sanitizeName = (value:string)=>{
    if (!value) return "";
    return value.trim().replace(/\s+/g, '').replace(/[^A-Za-zÁ-ÿ\s]/g, '').slice(0,70);
}
const sanitizeNumberString = (Value:string) =>{
    if (!Value) return ""
    return Value.replace(/\D/g, '').slice(0, 20);
}
const sanitizeEmail = (value:string) =>{
    if (!value) return "";
    return value.trim().toLowerCase().replace(/\s+/g, '').replace(/[<>'"]/g, '').slice(0, 70)
}

const capitalizaName = (value: string) => {
   return value.toLowerCase().split(' ')
   .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

const cadastroSchema = z.object({
    nome: z.string().min(1, "O nome é obrigatório").transform(sanitizeName).refine(val=>val.length>0, "O nome não pode ser vazio")
    .pipe(z.string().min(2, "O nome deve ter no mínimo 2 caracteres").max(70, "O Nome é demasiado longo!").regex(/^[A-Za-zÀ-ÿ\s]+$/, 'O nome contém caracteres inválidos')
    .refine(val => !val.match(/(.)\1{2,}/), 'O nome contém repetições suspeitas de caracteres').transform(capitalizaName)),
   
    telefone:z.string().min(1, 'O telefone é obrigatório').transform(sanitizeNumberString).refine(val => val.length > 0, 'O telefone não pode estar vazio')
    .pipe(z.string().length(9, 'O telefone deve ter exatamente 9 dígitos').regex(/^9[0-9]{8}$/, 'Número de telefone inválido (deve começar com 9)')
    .refine(val => !val.match(/^(.)\1{5}$/), 'Número de telefone inválido (possui demasiados dígitos repetidos)')),
    
     email: z.string().min(1, 'O e-mail é obrigatório').transform(sanitizeEmail).refine(val => val.length > 0, 'O e-mail não pode estar vazio')
    .pipe(z.string().max(80, 'O e-mail é demasiado longo').regex(/^[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, 'Formato de e-mail inválido')
    .refine(val => !val.includes('..'), 'E-mail não pode conter pontos consecutivos').refine(val => val.split('@')[0].length <= 64, 'A parte local do e-mail é demasiado longa')),
    
    password:z.string().min(1, 'A palavra-passe é obrigatória').min(6, 'A palavra-passe deve ter no mínimo 8 caracteres').max(64, 'A palavra-passe é demasiado longa')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]+$/, 'A palavra-passe deve conter: maiúscula, minúscula, número e caractere especial (@$!%*?&#)')
    .refine(val => !val.match(/(.)\1{2,}/), 'A palavra-passe não pode ter caracteres repetidos consecutivamente')
    .refine(val => !['12345678', 'password', 'senha123', 'admin123', 'qwerty123'].some(weak => val.toLowerCase().includes(weak)), 'A palavra-passe é muito fraca. Evite sequências comuns'),

    tipo: z.enum(["produtor", "consumidor"], "Selecione um tipo de utilizador válido")
});

type cadastroData=z.infer<typeof cadastroSchema>
export default function Cadastro(){

    const router = useRouter()

    const contentOverlay=[
        {icon:<HiOutlineCheck size={20} className="bg-white/30  rounded-2xl  text-white text-center" />, p: "Rastreie produtos do campo à mesa"},
        {icon:<HiOutlineCheck size={20}  className="bg-white/30  rounded-2xl  text-white text-center"/>, p: "Garanta segurança alimentar"},
        {icon:<HiOutlineCheck size={20} className="bg-white/30  rounded-2xl  text-white text-center" />, p:"Combata fraudes e adulterações"},
        {icon:<HiOutlineCheck size={20}  className="bg-white/30 rounded-2xl  text-white text-center"/>, p:"Fortaleça a confiança dos consumidores"}
    ]

    const tipoUtilizador=[
        "Produtor",
        "Consumidor"
    ]


   const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<cadastroData>({
    resolver: zodResolver(cadastroSchema)
})

async function handleCadastro(data:cadastroData){
       
   try{
     console.log(data);
    
     // Simula envio para API
   await new Promise((res) => setTimeout(res, 1000));
     
    toast.success("Conta criada com sucesso!",{
        duration: 4000
    })
    setTimeout(() => {
    router.push("/entrar");
    }, 1500);
     
   }catch(error){
    toast.success("Erro ao criar conta.Tenta novamente.", {
        duration: 4000
    })
   }
  
}
    return(
    <div className="flex  h-screen gap-12  bg-zinc-50">
         <div className="hidden md:flex w-1/2 h-full relative overflow-hidden">
           {/*<div className="absolute inset-0">*/} 
                <Image  src={vejetable} alt=" ImagemDeVejetal" fill priority className='object-cover' />
            {/** </div>*/}
         
            <div className="absolute flex flex-col items-center justify-center bg-green-600/50 inset-0 text-white ">
              <h2 className=" text-2xl font-semibold">Junte-se à revolução da  <br />  rastreabilidade alimentar</h2>
              
              <div className="flex flex-col ml-10 gap-1 mt-2">
                {
                contentOverlay.map((content, index) => (
                   <div key={index} className="mt-2 flex space-x-2 ">
                    {content.icon} 
                    <p>{content.p}</p>
                  </div>
                ))
                }
                
               </div>
               
            </div>
         </div>
 
      
        <div className="flex flex-col md:w-1/2 w-full h-full items-center justify-center p-6 overflow-y-auto">
      
            <div className="flex flex-col space-y-4  mr-70 ">
                <Link href={'/'} >
                <button className="text-zinc-600 text-xs flex gap-1 cursor-pointer mt-10"><HiArrowLeft size={18} />Voltar ao início</button>
                </Link> 
                
                <div className="flex gap-2 items-center">
                    <button className="text-2xl rounded-lg bg-green-600 text-white text-center w-8 h-8">O</button>
                    <p className="font-semibold text-lg text-zinc-700">Origem certa</p>
                    
                </div>
            </div>
            <div className="w-full max-w-md mx-auto flex flex-col gap-4 rounded-xl shadow-2xl hover:shadow-3xl transition p-6 mt-6 bg-white">
                <div className="flex flex-col space-y-2 mb-4">
                    <h2 className="text-xl font-semibold">Criar nova conta</h2>
                    <p className="text-xs text-zinc-600">Preencha os dados para se registar no sistema</p>
                </div>
                <form onSubmit={handleSubmit(handleCadastro)} className="space-y-2 ">
                    <div className="flex flex-col space-y-1 mt-1">
                         <label htmlFor="" className="text-sm text-zinc-800">Nome completo </label>
                        <div className="relative">
                            <LuUser className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'  size={14}/>
                            <input {...register("nome")} type="text" disabled={isSubmitting} placeholder='Seu nome completo' className="text-xs w-full h-10  rounded-lg pl-8 bg-gray-50 outline-green-600 border border-gray-200" />
                            {errors.nome && <p className="text-xs text-red-600">{errors.nome.message}</p>} 
                        </div>
                        
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col space-y-1 mt-1">
                            <label htmlFor="" className="text-sm text-zinc-800">Telefone </label>
                            <div className="relative">
                                <HiOutlinePhone className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' size={14}/>
                                 <input {...register("telefone")} type="text" disabled={isSubmitting} className="text-xs w-full h-10  rounded-lg pl-8 bg-gray-50 outline-green-600 border border-gray-200 " placeholder='+244 945 673 852'/>
                                 {errors.telefone && <p className="text-xs text-red-600">{errors.telefone.message}</p>} 
                            </div>

                            
                        </div>
                         <div className="flex flex-col space-y-1 mt-1">
                            <label htmlFor="email" className="text-sm text-zinc-800">E-mail </label>
                            <div className="relative">
                                <LuMail className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' size={14}/>
                                <input {...register("email")} type="email" disabled={isSubmitting} className="text-xs w-full h-10  rounded-lg pl-8 bg-gray-50 outline-green-600 border border-gray-200 "   placeholder='mutoocamaria@gmail.com'/>
                                {errors.email && <p className="text-xs text-red-600">{errors.email.message}</p>} 
                            </div>
                            
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1 mt-2">
                        <label htmlFor="password" className="text-sm text-zinc-800">Palavra-passe </label>
                        <div className="relative">
                            <LuLock className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' size={14}/>
                            <input {...register("password")} type="password" disabled={isSubmitting} className="text-xs w-full h-10  rounded-lg pl-8 bg-gray-50 outline-green-600 border border-gray-200"   placeholder='••••••••' />
                            {errors.password && <p className="text-xs text-red-600">{errors.password.message}</p>} 

                        </div>
                        <p className="text-zinc-700 text-xs">Mínimo 8 caracteres: maiúscula, minúscula, número e caractere especial como:!"$%/"&</p>
                    </div>
                    <div className="flex flex-col space-y-1 mt-2">
                        <label htmlFor="tipo" className="text-sm text-zinc-800">Tipo de utilizador</label>
                        <select {...register("tipo")} disabled={isSubmitting} name="" id="" className="text-xs w-full h-10  rounded-lg pl-4 bg-gray-50 outline-green-600 border border-gray-200"  >
                            {
                                tipoUtilizador.map((tipo, index) =>(
                                    <option  value={tipo.toLocaleLowerCase()} key={index} className="">
                                        {tipo}
                                    </option>
                                ))
                            }
                            {errors.tipo && <p className="text-sm text-red-600">{errors.tipo.message}</p>} 
                        </select>
                    </div>
                    <button type='submit' disabled={isSubmitting} className="p-2 w-full bg-green-600 rounded-lg text-center cursor-pointer mt-4 text-white mx-auto hover:bg-green-700  disabled:opacity-80 disabled:cursor-not-allowed">{isSubmitting? 'Criando conta...': 'Criar conta'}</button>
                </form>
           <p className="text-sm text-zinc-600 text-center mt-1">Já tem uma conta? <Link href={"/entrar"} className='text-green-700 text-sm hover:underline transition'>Entrar</Link></p> 
            </div>
            
      </div>
   

     </div>
        
       
    )
}