import React from 'react';

const Exercicio1 = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Exercício 1</h2>
      <hr />
      <p>Falae, fanático! Bem-vindo ao nosso espaço corinthiano! Aqui é tudo sobre o nosso Timão e o Depay!</p>
      <h1>Olá, Mundo!</h1>
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

export default Exercicio1;