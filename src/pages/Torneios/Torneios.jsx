import './style.css'
import NavBarHome from "../../Components/HomeNavBar/NavBarHome"
import CardTorneio from "../../Components/CardTorneio/CardTorneio"

export default function Torenios () {
    return(
        <>
            <NavBarHome/>
            <main className='main-content'>
                <div className='container_descubra_torneios' >
                    <div>
                        <h1>Descubra Torneios</h1>
                        <p>Participe de torneios dentro da Rivalix</p>
                    </div>
                    <div>
                        <button><span>+</span> Crie Torneios</button>
                    </div>
                </div>
                <div>
                    <div className='rotas_pag_torneios'>
                        <div className='links_pag_torneios'>
                            <button>Explorar</button>
                            <button>Meus Torneios</button>
                        </div>
                        <div>
                            <button href="#"><i class="ri-filter-3-line"></i> Filtros</button>
                        </div>
                    </div>
                    <div className='linha_pag_torneio'></div>
                    <div className='container_cards_pag_torneio'>
                        <h2>Populares</h2>
                        <div className='container_torneios_pag_torneio'>
                            <CardTorneio/>
                            <CardTorneio/>
                            <CardTorneio/>
                        </div>

                        <h2>Em Dupla</h2>
                        <div className='container_torneios_pag_torneio'>
                            <CardTorneio/>
                            <CardTorneio/>
                            <CardTorneio/>
                        </div>
                        
                    </div>
                </div>
            </main>
        </>
    )
}
