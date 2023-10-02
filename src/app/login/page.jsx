"use client"

import Image from "next/image";
import loginimage from "@/images/login.avif"
import { useState} from "react";
import { useRouter} from "next/navigation"
import { toast } from "react-hot-toast";
import { serverLogin } from "@/actions/user";

export default function Login(){

    // Aqui estamos criando estados para os campos dos formularios
    const [email,setEmail] = useState("")
    const [senha,setSenha] = useState("")
    const {push} = useRouter()

    function login(e){
        e.preventDefault()
        if (email=="teste@gmail.com" && senha =="123"){
            serverLogin()
            push("/")
        }else{
            toast.error("Dados Inválidos")
        }
        console.log("fazer login")
        console.log(email)
        console.log(senha)
    }

    return(
        <>
            <div className="flex ">
                <aside className="h-screen">
                <Image
                    src={loginimage}
                    alt=""
                    className="hidden lg:flex h-screen w-auto object-over"
                />
                </aside>
                <main className="flex flex-col justify-center items-center p-4 h-screen w-full">
                    <h2>AdoteUmDog</h2>
                    <form onSubmit={login} className="flex flex-col gap-2">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" 
                        id="email"
                        value={email} 
                        // o que foi digitado na caixa de texto é setado no valor
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-slate-600 p-1 rounded"/>
                        <label htmlFor="password">Senha</label>
                        <input 
                        type="password" 
                        id="password" 
                        value={senha} 
                        // o que foi digitado na caixa de texto é setado no valor
                        onChange={(e) => setSenha(e.target.value)}
                        className="bg-slate-600 p-1 rounded"/>
                        <button className="bg-yellow-400 p-2 rounded mt-2">Entrar</button>
                    </form>
                </main>
            </div>
        </>
    )
}