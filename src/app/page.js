"use client"
import Card from "@/components/Card";
import Tittle from "@/components/Tittle";
import Navbar from "@/components/navbar";
import React, { useEffect, useState } from 'react';

export default function Home() {
  // commit
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    // Faça uma solicitação GET à API simulada
    fetch('http://localhost:3001/filmes')
      .then((response) => response.json())
      .then((data) => setFilmes(data))
      .catch((error) => console.error('Erro ao buscar dados:', error));
  }, []);

  
  return (
    <>
      <Navbar/>
      <Tittle>Populares</Tittle>

      <div className='flex flex-wrap'>
      {filmes.map((filme, index) => <Card key={index} filme={filme} /> )}
    </div>

      {/* <section className="flex flex-wrap">
        {filmes.map((filme) => {
          return <CardFilme filme={filme}/>
        })}
      </section> */}
      <Tittle>Pequeno-Porte</Tittle>
      <Tittle>Grande-Porte</Tittle>
    </>
  )
}

// Ele usou o heroicons