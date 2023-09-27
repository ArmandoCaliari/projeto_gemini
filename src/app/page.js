import Card from "@/components/Card";
import Tittle from "@/components/Tittle";
import Navbar from "@/components/navbar";


export default function Home() {
  const filmes = [
    {
      titulo: "Gnpm iolden",
      nota: 7.3,
      poster: "https://cdn2.thedogapi.com/images/oUFtdaSw1.jpg",
    },
    {
      titulo: "Bull Terrier",
      nota: 8.9,
      poster: "https://cdn2.thedogapi.com/images/IdxyFpJdv.jpg",
    },
    {
      titulo: "Nop",
      nota: 8.9,
      poster: "https://cdn2.thedogapi.com/images/r1f_ll5VX_1280.jpg",
    },
    {
      titulo: "Bull Terrier",
      nota: 8.9,
      poster: "https://cdn2.thedogapi.com/images/fqYLZ9MFz.jpg",
    },
    {
      titulo: "Bull Terrier",
      nota: 8.9,
      poster: "https://cdn2.thedogapi.com/images/9HvLkpfQz.jpg",
    }
  ]

  
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
      <h1>Teste</h1>
    </>
  )
}

// Ele usou o heroicons