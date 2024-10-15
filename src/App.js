import React from 'react';
import Exercicio1 from './Exercicio1';
import Exercicio2 from './Exercicio2';
import Exercicio3 from './Exercicio3';
import Exercicio4 from './Exercicio4';
import Exercicio5 from './Exercicio5';
import Exercicio6 from './Exercicio6';
import Exercicio7 from './Exercicio7';
import Exercicio8 from './Exercicio8';
import Exercicio9 from './Exercicio9';
import Exercicio10 from './Exercicio10';
import './App.css';

const App = () => {
  const jogadores = [
    { id: 1, nome: 'Depay', idade: 28 },
    { id: 2, nome: 'Jô', idade: 36 },
    { id: 3, nome: 'Cássio', idade: 35 },
  ];

  const imagens = [
    { url: 'https://bolaparada.com.br/wp-content/uploads/2024/09/MEMPHIS-DEPAY-CORINTHIANS-e1726255870182-scaled.webp', altText: 'Depay em ação' },
    { url: 'https://soucg.com.br/wp-content/uploads/2024/10/Memphis-Depay-pode-deixar-o-Corinthians-apos-crise-com-patrocinadora.jpg', altText: 'Celebrando um gol' },
    { url: '', altText: 'Imagem vazia' },
  ];

  return (
    <div className="app">
      <h1 style={{ textAlign: 'center', color: '#000' }}>Lista 03 de Exercícios de ReactJS</h1>
      <Exercicio1 />
      <Exercicio2 />
      <Exercicio3 isVisible={true} />
      <Exercicio4 jogadores={jogadores} />
      <Exercicio5 urls={imagens.map(img => img.url)} />
      <Exercicio6 isHighlighted={true} />
      <Exercicio7 />
      <Exercicio8>
        <p>DePay, de filho, de Espírito Santo</p>
      </Exercicio8>
      <Exercicio9 />
      <Exercicio10 imagens={imagens} />
    </div>
  );
};

export default App;