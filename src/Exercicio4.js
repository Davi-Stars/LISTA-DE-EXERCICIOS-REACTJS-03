import React from 'react';

const Exercicio4 = ({ jogadores }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Exercício 4</h2>
      <hr />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>ID</th>
            <th style={styles.tableHeader}>Nome</th>
            <th style={styles.tableHeader}>Idade</th>
          </tr>
        </thead>
        <tbody>
          {jogadores.map((jogador) => (
            <tr key={jogador.id}>
              <td>{jogador.id}</td>
              <td>{jogador.nome}</td>
              <td>{jogador.idade}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
  tableHeader: {
    border: '1px solid #000',
    backgroundColor: '#f0f0f0',
  },
};

export default Exercicio4;