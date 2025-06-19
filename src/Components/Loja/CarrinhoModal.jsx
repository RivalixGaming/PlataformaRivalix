import styles from './CarrinhoModal.module.css';
import { RiCloseLine, RiDeleteBinLine } from 'react-icons/ri';

export default function CarrinhoModal({aberto, itens, onFechar, onRemover, onFinalizar}) {
    if (!aberto) return null

    const total = itens.reduce((acc, item) => acc + item.preco, 0);

    return(
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button onClick={onFechar} className={styles.btnFechar}><RiCloseLine/></button>
            
                <h2>Carrinho de Compras</h2>

                {itens.length === 0 ? (
                    <p className={styles.vazio}>Seu Carrinho está vazio.</p>
                ) : (
                    <ul className={styles.listaItens}>
                        {itens.map((item, index) => (
                            <li key={index} className={styles.item}>
                                <img src={item.imagem} alt={item.nome} className={styles.itemImg} />
                                <div className={styles.itemInfo}>
                                    <strong>{item.nome}</strong>
                                    <p>R$: {item.preco.toFixed(2)}</p>
                                </div>
                                <button onClick={() => onRemover(index)}>
                                    <RiDeleteBinLine/>
                                </button>
                            </li>
                        ))}
                    </ul>
                )}

                <div className={styles.total}><p>Total: <strong>R$: {total.toFixed(2)}</strong></p></div>

                <button className={styles.btnFinalizar} disabled={itens.length === 0} onClick={onFinalizar}>
                    Finalizar Compra
                </button>
            </div>
        </div>
    )
}