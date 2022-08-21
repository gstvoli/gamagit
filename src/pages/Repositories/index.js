import React, { useEffect, useState } from 'react';
import * as Sty from './styled';
import { Navigate, useNavigate } from 'react-router-dom';

//useEffect fica monitorando uma mudança em cima de uma variável
//e dispara uma função quando nota alguma mudança

export default function Repositories() {
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    if (repositoriesName != null) {
      repositoriesName = JSON.parse(repositoriesName);
      setRepositories(repositoriesName);
      localStorage.clear();
    } else {
      Navigate('/');
    }
  }, []);
  return (
    <Sty.Container>
      <Sty.Title>Repositóros</Sty.Title>
      <Sty.List>
        {repositories.map((repository) => {
          return <Sty.ListItem>Repositório: {repository}</Sty.ListItem>;
        })}
      </Sty.List>
      <Sty.LinkHome to="/">Voltar</Sty.LinkHome>
    </Sty.Container>
  );
}
