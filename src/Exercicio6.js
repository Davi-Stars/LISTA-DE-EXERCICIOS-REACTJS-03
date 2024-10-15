import React from 'react';

const Exercicio6 = ({ isHighlighted }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Exercício 6</h2>
      <hr />
      <p style={{ color: isHighlighted ? 'orange' : 'black' }}>
        O Depay vai brilhar no campo, pode apostar!
      </p>
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

export default Exercicio6;