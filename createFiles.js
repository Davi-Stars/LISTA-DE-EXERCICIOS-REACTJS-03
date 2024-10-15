const fs = require('fs');

const exercises = [
  {
    title: 'Exercício 1',
    content: `import React from 'react';

const ListaDinamica = ({ nomes }) => {
  return (
    <ul>
      {nomes.map((nome, index) => (
        <li key={index}>{nome}</li>
      ))}
    </ul>
  );
};

export default ListaDinamica;`,
  },
  {
    title: 'Exercício 2',
    content: `import React from 'react';
import Filho from './Filho';

const Pai = () => {
  const nome = 'Corinthians';
  return (
    <div>
      <Filho nome={nome} />
    </div>
  );
};

export default Pai;`,
  },
  {
    title: 'Exercício 3',
    content: `import React from 'react';

const Condicional = ({ isVisible }) => {
  return (
    <div>
      {isVisible && <p>Parágrafo visível!</p>}
    </div>
  );
};

export default Condicional;`,
  },
  {
    title: 'Exercício 4',
    content: `import React from 'react';

const Tabela = ({ dados }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Idade</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.nome}</td>
            <td>{item.idade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabela;`,
  },
  {
    title: 'Exercício 5',
    content: `import React from 'react';

const ImagensCondicional = ({ urls }) => {
  return (
    <div>
      {urls.map((url, index) =>
        url ? <img key={index} src={url} alt="Imagem" /> : null
      )}
    </div>
  );
};

export default ImagensCondicional;`,
  },
  {
    title: 'Exercício 6',
    content: `import React from 'react';

const EstiloDinamico = ({ isHighlighted }) => {
  return (
    <p style={{ color: isHighlighted ? 'red' : 'black' }}>
      Este texto pode mudar de cor!
    </p>
  );
};

export default EstiloDinamico;`,
  },
  {
    title: 'Exercício 7',
    content: `import React, { useState } from 'react';

const ListaDeTarefas = () => {
  const [tarefas, setTarefas] = useState(['Tarefa 1', 'Tarefa 2', 'Tarefa 3']);

  const removerTarefa = (index) => {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  };

  return (
    <ul>
      {tarefas.map((tarefa, index) => (
        <li key={index}>
          {tarefa} <button onClick={() => removerTarefa(index)}>Remover</button>
        </li>
      ))}
    </ul>
  );
};

export default ListaDeTarefas;`,
  },
  {
    title: 'Exercício 8',
    content: `import React from 'react';

const Card = ({ children }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      {children}
    </div>
  );
};

export default Card;`,
  },
  {
    title: 'Exercício 9',
    content: `import React from 'react';

const FragmentosAninhados = () => {
  return (
    <>
      <h1>Título</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
      <p>Um parágrafo aqui.</p>
    </>
  );
};

export default FragmentosAninhados;`,
  },
  {
    title: 'Exercício 10',
    content: `import React from 'react';

const ImagensAltDinâmico = ({ imagens }) => {
  return (
    <div>
      {imagens.map((imagem, index) => (
        <img key={index} src={imagem.url} alt={imagem.altText} />
      ))}
    </div>
  );
};

export default ImagensAltDinâmico;`,
  },
];

exercises.forEach((exercise, index) => {
  fs.writeFileSync(`src/Exercicio${index + 1}.js`, exercise.content);
});
console.log('Arquivos criados com sucesso!');