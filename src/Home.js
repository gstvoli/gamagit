import React, { useState } from 'react';
import axios from 'axios';

//hooks são uma API que facilitam a utilização de algumas coisas no React
//useState permite que setar e alterar estados

//Todo componente recebe um parâmetro chamado de props, que são as propriedades
//todo componente tem esse parametro props

function App(props) {
  const [usuario, setUsuario] = useState('');

  function handlePesquisa() {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => console.log(response.data));
  }

  return (
    <>
      <input
        className="usuarioInput"
        placeholder="Usuário"
        value={usuario}
        onChange={e => setUsuario(e.target.value)}
      />
      <button type="button" onClick={handlePesquisa}>
        Pesquisar
      </button>
    </>
  );
}

export default App;
