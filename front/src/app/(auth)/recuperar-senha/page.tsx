'use client'
import {useForm} from 'react-hook-form';
import { useRouter } from 'next/navigation';
import {z} from 'zod';
import { zodResolver } from '@hookform/Resolvers/zod';
import toast from 'react-hot-toast';
import {  LuMail } from "react-icons/lu";
import {HiArrowLeft} from "react-icons/hi";
import Link from 'next/link'
import SectionLogin from "../../components/sectionLogin";


const sanitizeEmail=(value:string)=>{
    if (!value) return ""
    return value.trim().toLowerCase().replace(/\s+/g, '').replace(/[<>'"]/g, '').slice(0,70)
}

const recuperarSenhaSchema =z.object({
    email:z.string().min(1,"O e-mail é obrigatório!").transform(sanitizeEmail).refine(val=>val.length >0, "O e-mail não pode ser vazio")
    .pipe(z.string().max(70,"E-mail demasiado longo.").email("Formato de e-mail inválido").refine(val=> !val.includes('..'), "E-mail não pode conter pontos consecutivos.")
    .refine(val => val.split('@')[0].length <= 64, 'A parte local do e-mail é demasiado longa')
)
})

type recuperarSenhaData = z.infer< typeof recuperarSenhaSchema>

export default function RecuperarSenha(){

    const router = useRouter();
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<recuperarSenhaData>({
        resolver: zodResolver(recuperarSenhaSchema)
    })

    async function onSubmit(data: recuperarSenhaData) {
    try {
        console.log("Email enviado:", data.email);

        // MOCK (enquanto não tem backend, simula chamada a API)
        await new Promise(res => setTimeout(res, 1000));

        const token = Math.random().toString(36).substring(2);
        const expires = Date.now() + 24 * 60 * 60 * 1000;

        localStorage.setItem("resetToken", token);
        localStorage.setItem("resetEmail", data.email);
        localStorage.setItem("resetExpires", String(expires));

        console.log(`LINK: http://localhost:3000/redefinir-senha?token=${token}`);

        toast.success("E-mail de recuperação enviado com sucesso.", {
            duration: 3000
        });

        setTimeout(() => {
            router.push(`/redefinir-senha?token=${token}`);
        }, 2000);

    } catch (error) {
        toast.error('Erro ao enviar e-mail. Tenta novamente', {
            duration: 3000
        });
    }
}

    return(
        <div className="flex h-screen bg-[#F5EBD2]/50 gap-12">
            
               <SectionLogin />
            <div className="flex flex-col md:w-1/2  h-full overflow-y-auto items-center justify-center p-6 mt-8 mx-auto ">

                <div className="w-full max-w-sm space-y-2  rounded-lg shadow-2xl bg-white p-6">
                   <Link href="/entrar" >
                   <button className="flex items-center space-x-6 text-xs text-zinc-500  cursor-pointer mb-2"><HiArrowLeft size={15} />Voltar ao login</button>
                   </Link>
                   <div className="space-y-2">
                         <h1 className=" text-xl font-semibold">Esqueceu a senha?</h1>
                         <p className="text-xs text-zinc-500">Introduza o seu email e enviaremos um link para <br /> redefinir a sua palavra-passe.</p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 ">
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="" className='text-sm text-zinc-800'>E-mail</label>
                            <div className="relative">
                                <LuMail  className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'/>
                                <input {...register("email")} type="email" disabled={isSubmitting}  placeholder='mutoocamaria@gmail.com' className='text-xs bg-gray-50 pl-8 h-10 w-full border border-gray-200 rounded-lg outline-green-600'/>
                            </div>
                            {errors.email && <p className="text-xs text-red-600">{errors.email.message}</p>} 
                        </div>
                        <button disabled={isSubmitting} className="p-2 w-full bg-green-600 rounded-lg text-xs text-center text-white cursor-pointer hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-80  mt-4">{isSubmitting ?"Enviando..." :"Enviar link de recuperação"}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}