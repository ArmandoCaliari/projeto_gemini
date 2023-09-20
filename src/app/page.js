import Card from "@/components/Card";
import Tittle from "@/components/Tittle";

export default function Home() {

  const filmes = [
    {
      titulo: "Gnpm iolden",
      nota: 7.3,
      poster: "https://cdn2.thedogapi.com/images/oUFtdaSw1.jpg"
      // https://place-hold.it/150x220/600/fff
    },
    {
      titulo: "Bull Terrier",
      nota: 8.9,
      poster: "https://cdn2.thedogapi.com/images/IdxyFpJdv.jpg"
    },
    {
      titulo: "Bull Terrier",
      nota: 8.9,
      poster: "https://cdn2.thedogapi.com/images/r1f_ll5VX_1280.jpg"
    },
    {
      titulo: "Bull Terrier",
      nota: 8.9,
      poster: "https://cdn2.thedogapi.com/images/fqYLZ9MFz.jpg"
    },
    {
      titulo: "Bull Terrier",
      nota: 8.9,
      poster: "https://cdn2.thedogapi.com/images/9HvLkpfQz.jpg"
    }
  ]


  return (
    /*<> é a tag fragment só pra nao */
    <>
      <nav className="p-4 bg-slate-800 flex gap-20">
        <ul>
          <li>
            <h1 className="text-slate-100">AdoteUMDog</h1>
          </li>
        </ul>
        <ul>
          <li>
            <a href="" className="text-slate-100">Guarda</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="" className="text-slate-100">Pastoreiro</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="" className="text-slate-100">Caseiro</a>
          </li>
        </ul>
        
      </nav>
      <Tittle>Populares</Tittle>


      <section className="flex flex-wrap">
        {filmes.map(filme => <Card filme={filme}/> )}
      </section>
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