import React from 'react';

const Exercicio8 = ({ children }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Exercício 8</h2>
      <hr />
      <div style={styles.card}>
        {children}
      </div>
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
  card: {
    border: '2px dashed black',
    padding: '10px',
    borderRadius: '4px',
    textAlign: 'center',
  },
};

export default Exercicio8;