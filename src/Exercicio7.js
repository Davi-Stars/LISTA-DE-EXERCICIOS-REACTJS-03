import React, { useState } from 'react';

const Exercicio7 = () => {
  const [tarefas, setTarefas] = useState(['Treino', 'Estudar', 'Assistir ao jogo']);

  const removerTarefa = (index) => {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Exercício 7</h2>
      <hr />
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            {tarefa} <button onClick={() => removerTarefa(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#ffffff',
    padding: '20px',
    margin: '20px 0',
    border: '2px solid #000',
    borderRadius: '8px',
  },
  title: {
    color: '#000',
  },
};

export default Exercicio7;