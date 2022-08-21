import React, { useState } from 'react';
import axios from 'axios';
import * as Sty from './styled';
import { useNavigate } from 'react-router-dom';
//hooks são uma API que facilitam a utilização de algumas coisas no React
//useState permite que setar e alterar estados

//Todo componente recebe um parâmetro chamado de props, que são as propriedades
//todo componente tem esse parametro props

function App(props) {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [error, setError] = useState(false);

  function handlePesquisa() {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then((response) => {
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map((repository) => {
          repositoriesName.push(repository.name);
        });
        localStorage.setItem(
          'repositoriesName',
          JSON.stringify(repositoriesName)
        );
        setError(false);
        navigate('/repositories');
      })
      .catch((err) => {
        setError(true);
      });
  }

  return (
    <Sty.HomeContainer>
      <Sty.Content>
        <Sty.Input
          className="usuarioInput"
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <Sty.Button type="button" onClick={handlePesquisa}>
          Pesquisar
        </Sty.Button>
      </Sty.Content>
      {error ? (
        <Sty.ErrorMsg>Ocorreu um erro. Tente novamente.</Sty.ErrorMsg>
      ) : (
        ''
      )}
    </Sty.HomeContainer>
  );
}

export default App;
