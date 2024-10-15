import React from 'react';
import Filho from './Filho';

const Exercicio2 = () => {
  const nome = 'Depay';

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Exercício 2</h2>
      <hr />
      <p>Aqui no Timão, sempre temos um espaço para os nossos craques!</p>
      <Filho nome={nome} />
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

export default Exercicio2;