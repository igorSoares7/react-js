import { useContext } from "react"
import PrefContext from "../../Context/generalContext"



interface className{
    className?:any
}



const Home = ({className}:className) => {
const prefs = useContext(PrefContext)

return (
<>
<main className={className}>
    <h1>{prefs.tema}</h1>
    <div className='maior'>
                <div className="conteudo-main">
                main
                </div>
                <div className="conteudo-main">
                main
                </div>
                <div className="conteudo-main">
                main
                </div>
                <div className="conteudo-main">
                main
                </div>
                <div className="conteudo-main">
                main
                </div>
                <div className="conteudo-main">
                main
                </div>
                </div>

            </main>
</>
)
}

export default Home
