import React from 'react';

const Exercicio3 = ({ isVisible }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Exercício 3</h2>
      <hr />
      <p>{isVisible ? 'A torcida vibra com a chegada do Depay!' : ''}</p>
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

export default Exercicio3;