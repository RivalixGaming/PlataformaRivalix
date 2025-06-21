import React, { useState } from "react";
import styles from './ModalCriarTorneio.module.css';
import { useTheme } from "../../contexts/ThemeContext";
import Padrao from "../../assets/torneios/imagemTorneioPadrao.png";

export default function ModalCriarTorneio({ aberto, fechar, salvarTorneio }) {
  if (!aberto) return null;

  const { theme } = useTheme();

  const [titulo, setTitulo] = useState("");
  const [jogo, setJogo] = useState("");
  const [modalidade, setModalidade] = useState("Solo");
  const [tipo, setTipo] = useState("Online");
  const [data, setData] = useState("");
  const [vagas, setVagas] = useState("");
  const [valorEntrada, setValorEntrada] = useState("");
  const [premio, setPremio] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagemBase, setImagemBase] = useState("");

  // Endereço
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");

  const enderecoValido =
    tipo === "Presencial"
      ? rua && numero && bairro && cidade && estado && cep
      : true;

  const formularioValido =
    titulo.trim() &&
    jogo.trim() &&
    data.trim() &&
    descricao.trim() &&
    Number(vagas) > 0 &&
    modalidade.trim() &&
    tipo.trim() &&
    enderecoValido;

  const handleUploadImagem = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagemBase(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const localizacao =
      tipo === "Presencial"
        ? `${rua}, ${numero} - ${bairro}, ${cidade} - ${estado}, CEP: ${cep}`
        : "Online";

    const novoTorneio = {
      id: Date.now(),
      titulo,
      jogo,
      modalidade,
      tipo,
      data,
      localizacao,
      totalVagas: parseInt(vagas),
      vagasRestantes: parseInt(vagas),
      valorEntrada,
      premio,
      descricao,
      imgTorneio: imagemBase || Padrao,
    };

    salvarTorneio(novoTorneio);
    fechar();
  };

  return (
    <div className={`${styles.overlay} ${theme === 'dark' ? styles.dark : ''}`}>
      <div className={`${styles.modal} ${theme === 'dark' ? styles.dark : ''}`}>
        <button onClick={fechar} className={styles.fechar}>X</button>
        <h2>Criar Torneio</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" placeholder="Título do Torneio" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />

          <select value={jogo} onChange={(e) => setJogo(e.target.value)} required>
            <option value="" disabled>Selecione o jogo</option>
            <option value="Brawlhalla">Brawlhalla</option>
            <option value="Fatal Fury: City of the Wolves">Fatal Fury: City of the Wolves</option>
            <option value="GBVSR">GBVSR</option>
            <option value="Guilty Gear Strive">Guilty Gear Strive</option>
            <option value="Mortal Kombat 1">Mortal Kombat 1</option>
            <option value="Street Fighter 6">Street Fighter 6</option>
            <option value="Tekken 8">Tekken 8</option>
          </select>

          <select value={modalidade} onChange={(e) => setModalidade(e.target.value)}>
            <option value="Solo">Solo</option>
            <option value="Dupla">Dupla</option>
            <option value="Equipe">Equipe</option>
          </select>

          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="Online">Online</option>
            <option value="Presencial">Presencial</option>
          </select>

          <input type="date" value={data} onChange={(e) => setData(e.target.value)} required />

          {tipo === "Presencial" && (
            <div className={styles.endereco}>
              <input type="text" placeholder="Rua" value={rua} onChange={(e) => setRua(e.target.value)} required />
              <input type="text" placeholder="Número" value={numero} onChange={(e) => setNumero(e.target.value)} required />
              <input type="text" placeholder="Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} required />
              <input type="text" placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} required />
              <input type="text" placeholder="Estado" value={estado} onChange={(e) => setEstado(e.target.value)} required />
              <input type="text" placeholder="CEP" value={cep} onChange={(e) => setCep(e.target.value)} required />
            </div>
          )}

          <input type="number" placeholder="Vagas totais" value={vagas} onChange={(e) => setVagas(e.target.value)} required />
          <input type="text" placeholder="Valor de Entrada" value={valorEntrada} onChange={(e) => setValorEntrada(e.target.value)} />
          <input type="text" placeholder="Prêmio" value={premio} onChange={(e) => setPremio(e.target.value)} />

          <input type="file" accept="image/*" onChange={handleUploadImagem} />
          {imagemBase && (
            <img src={imagemBase} alt="Prévia" style={{ width: "100%", borderRadius: "8px", marginTop: "0.5rem" }} />
          )}

          <textarea placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} />

          <button type="submit" disabled={!formularioValido}>Criar Torneio</button>
        </form>
      </div>
    </div>
  );
}
