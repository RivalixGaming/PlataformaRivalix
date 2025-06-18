import './CardTorneio.css'
import fotoTorneio from "../../assets/torneio2.png"

export default function CardTorneio() {
    return(
        <div className="container_card_perfil">
            <img src={fotoTorneio} alt="" />
            <h2>Nome Do Torneio</h2>
            <p>Localização</p>
            <div className="categorias">
                <p>modalidade</p>
                <p>tipo</p>
                <p>data</p>
            </div>
            <div className='infos_extras'>
                <p>vagas restantes: 10</p>
                <div className="barra_de_conclusao">
                    <div className='barra_de_conclusao_interna'>
                    </div>
                </div>
                <p>descrição breve do torneio</p>
            </div>
        </div>
    )
}