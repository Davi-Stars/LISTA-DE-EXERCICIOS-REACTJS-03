import React from 'react';

const Exercicio10 = ({ imagens }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Exercício 10</h2>
      <hr />
      {imagens.map((imagem, index) => (
        imagem.url ? <img key={index} src={imagem.url} alt={imagem.altText} style={styles.image} /> : null
      ))}
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

export default Exercicio10;