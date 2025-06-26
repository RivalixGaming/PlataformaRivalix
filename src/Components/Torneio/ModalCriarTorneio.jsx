import React, { useState } from "react";
import styles from "./ModalCriarTorneio.module.css";
import { useTheme } from "../../contexts/ThemeContext";
import Padrao from "../../assets/torneios/imagemTorneioPadrao.png";

export default function ModalCriarTorneio({ aberto, fechar, salvarTorneio }) {
  if (!aberto) return null;

  const { theme } = useTheme();

  /* ──────────── estados ──────────── */
  const [titulo, setTitulo] = useState("");
  const [jogo, setJogo] = useState("");
  const [modalidade, setModalidade] = useState("Solo");
  const [tipo, setTipo] = useState("Online");
  const [formato, setFormato] = useState("Eliminação Única");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [vagas, setVagas] = useState("");
  const [valorEntrada, setValorEntrada] = useState("");
  const [premio, setPremio] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagemBase, setImagemBase] = useState("");

  /* participantes (máx. 8) */
  const [participantes, setParticipantes] = useState([]);
  const [currentParticipante, setCurrentParticipante] = useState("");

  const handleAddParticipante = () => {
    if (currentParticipante.trim() && participantes.length < 8) {
      setParticipantes([...participantes, currentParticipante.trim()]);
      setCurrentParticipante("");
    }
  };

  const handleRemoveParticipante = (indexToRemove) => {
    setParticipantes(participantes.filter((_, idx) => idx !== indexToRemove));
  };

  /* endereço (somente se presencial) */
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [cep, setCep] = useState("");

  /* ──────────── validação ──────────── */
  const enderecoValido =
    tipo === "Presencial"
      ? rua && numero && bairro && cidade && estado && cep
      : true;

  const formularioValido =
    titulo.trim() &&
    jogo.trim() &&
    data.trim() &&
    hora.trim() &&
    descricao.trim() &&
    modalidade.trim() &&
    tipo.trim() &&
    formato.trim() &&
    Number(vagas) > 0 &&
    enderecoValido;

  /* ──────────── imagem ──────────── */
  const handleUploadImagem = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setImagemBase(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const endereco =
      tipo === "Presencial"
        ? `${rua}, ${numero} - ${bairro}, ${cidade} - ${estado}, CEP: ${cep}`
        : "Online";

    const novoTorneio = {
      id: Date.now(),
      titulo,
      jogo,
      modalidade,
      tipo,
      formato,
      data,
      hora,
      endereco,
      totalVagas: +vagas,
      vagasRestantes: +vagas,
      entradaValor: parseFloat(valorEntrada) || 0,
      premioTotal: parseFloat(premio) || 0,
      descricao,
      imgTorneio: imagemBase || Padrao,
      participantes,
    };

    salvarTorneio(novoTorneio);
    fechar();
  };

  /* ──────────── JSX ──────────── */
  return (
    <div className={`${styles.overlay} ${theme === "dark" ? styles.dark : ""}`}>
      <div className={`${styles.modal} ${theme === "dark" ? styles.dark : ""}`}>
        <button onClick={fechar} className={styles.fechar}>
          ×
        </button>
        <h2>Criar Torneio</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* título, jogo, modalidade, tipo */}
          <input
            type="text"
            placeholder="Título do Torneio"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />

          <select
            value={jogo}
            onChange={(e) => setJogo(e.target.value)}
            required
          >
            <option value="" disabled>
              Selecione o jogo
            </option>
            <option>Brawlhalla</option>
            <option>Fatal Fury: City of the Wolves</option>
            <option>GBVSR</option>
            <option>Guilty Gear Strive</option>
            <option>Mortal Kombat 1</option>
            <option>Street Fighter 6</option>
            <option>Tekken 8</option>
          </select>

          <select
            value={modalidade}
            onChange={(e) => setModalidade(e.target.value)}
          >
            <option value="Solo">Solo</option>
            <option value="Dupla">Dupla</option>
            <option value="Equipe">Equipe</option>
          </select>

          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="Online">Online</option>
            <option value="Presencial">Presencial</option>
          </select>

          {/* formato, data e hora */}
          <select value={formato} onChange={(e) => setFormato(e.target.value)}>
            <option value="" disabled>
              Selecione o formato
            </option>
            <option>Eliminação Única</option>
            <option>Eliminação Dupla</option>
            <option>Fase de Grupos + Eliminação</option>
            <option>Ranking por Pontos</option>
          </select>

          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          />
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required
          />

          {/* endereço se Presencial */}
          {tipo === "Presencial" && (
            <div className={styles.endereco}>
              <input
                placeholder="Rua"
                value={rua}
                onChange={(e) => setRua(e.target.value)}
                required
              />
              <input
                placeholder="Número"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                required
              />
              <input
                placeholder="Bairro"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                required
              />
              <input
                placeholder="Cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                required
              />
              <input
                placeholder="Estado"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                required
              />
              <input
                placeholder="CEP"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                required
              />
            </div>
          )}

          {/* vagas, valores, imagens */}
          <input
            type="number"
            placeholder="Vagas totais"
            min="1"
            value={vagas}
            onChange={(e) => setVagas(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Valor de Entrada"
            value={valorEntrada}
            onChange={(e) => setValorEntrada(e.target.value)}
          />
          <input
            type="text"
            placeholder="Prêmio"
            value={premio}
            onChange={(e) => setPremio(e.target.value)}
          />

          <input type="file" accept="image/*" onChange={handleUploadImagem} />
          {imagemBase && (
            <img
              src={imagemBase}
              alt="Prévia"
              style={{ width: "100%", borderRadius: 8, marginTop: "0.5rem" }}
            />
          )}

          {/* participantes */}
          <div className={styles.participantSection}>
            <h4>Participantes ({participantes.length}/8)</h4>
            <div className={styles.participantInputWrapper}>
              <input
                type="text"
                placeholder="Nome do participante"
                value={currentParticipante}
                onChange={(e) => setCurrentParticipante(e.target.value)}
                disabled={participantes.length >= 8}
              />
              <button
                type="button"
                onClick={handleAddParticipante}
                disabled={participantes.length >= 8}
              >
                Adicionar
              </button>
            </div>

            <ul className={styles.participantList}>
              {participantes.map((p, idx) => (
                <li key={idx}>
                  {p}
                  <button
                    type="button"
                    onClick={() => handleRemoveParticipante(idx)}
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* descrição e submit */}
          <textarea
            placeholder="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />

          <button type="submit" disabled={!formularioValido}>
            Criar Torneio
          </button>
        </form>
      </div>
    </div>
  );
}
