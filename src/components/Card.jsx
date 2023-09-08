
"use client"
import { HeartIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
export default function Card({filme}){

    const [favorito, setfavorito] = useState(false)

    return(
        <div id="card" className="flex flex-col w-40 justify-center items-center m-2">
            {favorito ? 
                <HeartIcon onClick={() => setfavorito(false)} className="h-6 w-6 text-rose-600 cursor-pointer" />//se for false 
                :
                <HeartIcon onClick={() => setfavorito(true)} className="h-6 w-6 text-slate-100 cursor-pointer" />//se for true
            }
            
            <img className="rounded " src={filme.poster} alt="" />
            <span className="font-bold text-center line-clamp-1" >
                {filme.titulo}
            </span>
            <div>
                <span>{filme.nota}</span>
            </div>
            <a href="" className="bg-yellow-400 py-2 w-full rounded text-center">
                Detalhes
            </a>
        </div>
    )
}