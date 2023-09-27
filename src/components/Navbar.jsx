"use client"
import { useRouter } from "next/navigation"
import { serverLogout } from "@/actions/user"

export default function Navbar(){

    const { push } = useRouter()

    function handleLogout(){
        serverLogout()
        push("/login")
      }
    return(
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
        <button className="text-slate-100" onClick={handleLogout}>logout</button>
      </nav>
    )

}