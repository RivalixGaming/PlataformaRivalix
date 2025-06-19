import { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import NavbarHome from '../../Components/HomeNavBar/NavBarHome.jsx';
import { RiGamepadLine, RiUserLine, RiGiftLine, RiShirtLine, RiTrophyLine, RiFlashlightLine, RiShoppingCartLine, RiFilter3Line } from 'react-icons/ri';
import styles from './LojaVirtual.module.css';

import camisetaRivalix from '../../assets/loja/camisetaRivalix.png'
import fone from '../../assets/loja/fone.png'
import mouse from '../../assets/loja/mouse.png'

const categorias = [
    { nome: "Hardware", icone: <RiGamepadLine />},
    { nome: "Perfil", icone: <RiUserLine />},
    { nome: "Gift-Card", icone: <RiGiftLine />},
    { nome: "Roupas", icone: <RiShirtLine />},
    { nome: "Times", icone: <RiTrophyLine />},
    { nome: "Kit Rivalix", icone: <RiFlashlightLine/>},
]

const produtosExemplos = [
    { id: 1, nome: 'Camiseta Rivalix', preco: "60.00", imagem: camisetaRivalix},
    { id: 2, nome: 'HeadSeat', preco: "320.00", imagem: fone},
    { id: 3, nome: 'Mouse Gamer', preco: "200.00", imagem: mouse},
]

export default function Loja() {
    const {theme} = useTheme();
    const [carrinho, setCarrinho] = useState([]);

    const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
    };

    return (
        <>
            <NavbarHome />
            <main className="main-content">
                <section className={`${styles.container} ${theme === 'dark' ? styles.dark: ''}`}>
                    <div className={styles.headerTop}>
                        <div>
                            <h1 className={styles.titulo}>Loja Virtual</h1>
                            <p className={styles.subtitulo}>
                                Equipe-se para vencer. Explore itens exclusivos e leve seu jogo ao próximo nível.
                            </p>
                        </div>
                        <div className={styles.iconesHeader}>
                            <button className={styles.botaoIcone} title="Carrinho">
                                <RiShoppingCartLine />
                            </button>
                            <button className={styles.botaoIcone} title="Filtro">
                                <RiFilter3Line />
                            </button>
                        </div>
                    </div>

                    <hr className={styles.divisor} />

                    <div className={styles.categorias}>
                        {categorias.map((item, i) => (
                            <div key={i} className={styles.categoria}>
                            <div className={styles.iconeContainer}>
                                {item.icone}
                            </div>
                            <span className={styles.nome}>{item.nome}</span>
                            </div>
                        ))}
                    </div>

                    <hr className={styles.divisor} />

                    <div className={styles.produtosGrid}>
                        {produtosExemplos.map((produto) => (
                        <div key={produto} className={styles.produtoCard}>
                            <img src={produto.imagem} alt={produto.nome}  className={styles.produtoImg}/>
                            <p className={styles.produtoNome}>{produto.nome}</p>
                            <p className={styles.produtoPreco}>R$: {produto.preco}</p>
                            <button onClick={() => adicionarAoCarrinho(produto)} className={styles.botaoComprar}>
                                Adicionar ao Carrinho
                            </button>
                        </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}