import React from 'react';

const Exercicio5 = ({ urls }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Exercício 5</h2>
      <hr />
      {urls.map((url, index) =>
        url ? <img key={index} src={url} alt={`Imagem ${index + 1}`} style={styles.image} /> : null
      )}
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
  image: {
    width: '100%',
    marginBottom: '10px',
  },
};

export default Exercicio5;