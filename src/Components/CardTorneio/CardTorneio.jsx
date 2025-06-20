import './CardTorneio.css'
// import fotoTorneio from "../../assets/torneio2.png"

export default function CardTorneio({titulo, foto, localizacao, modalidade, tipo, data, vagaRestante, descricao}) {
    return(
        <div className="container_card_perfil">
            <img src={foto} alt="" />
            <h2 className='titulo_torneio_card'>{titulo}</h2>
            <p>{localizacao}</p>
            <div className="categorias">
                <p>{modalidade}</p>
                <p>{tipo}</p>
                <p>{data}</p>
            </div>
            <div className='infos_extras'>
                <p>vagas restantes: {vagaRestante}</p>
                <div className="barra_de_conclusao">
                    <div className='barra_de_conclusao_interna'>
                    </div>
                </div>
                <p>{descricao}</p>
            </div>
        </div>
    )
}