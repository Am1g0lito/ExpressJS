var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusItens = [
        { id: 1, nome: 'Geléia Espacial', descricao: 'Uma explosão de sabores cósmicos em cada colherada.' },
        { id: 2, nome: 'Caneca que Te Julga', descricao: 'Muda de cor quando o café esfria. Ela sabe que você tá enrolando.' },
        { id: 3, nome: 'Sabonete de Nuvem', descricao: 'Cheiro de céu limpo e toque de algodão.' },
        { id: 4, nome: 'Cacto DJ', descricao: 'Uma plantinha que dança com a sua playlist do Spotify.' },
        { id: 5, nome: 'Pasta de Dente com Glitter', descricao: 'Sorria como se estivesse em um clipe pop dos anos 2000.' },
        { id: 6, nome: 'Meias Antissociais', descricao: 'Escrito "Não fale comigo" em 6 idiomas. Pra usar no busão.' },
        { id: 7, nome: 'Lâmpada que Conta Histórias', descricao: 'Pisca com trechos de contos quando você apaga a luz.' },
        { id: 8, nome: 'Spray de Coragem', descricao: 'Aromaterapia com cheiro de "você consegue".' },
        { id: 9, nome: 'Chiclete Infinito', descricao: 'O sabor dura mais que seu último relacionamento.' },
        { id: 10, nome: 'Agenda do Caos', descricao: 'Planeje o imprevisto. Spoiler: você vai amar.' },
        
    ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('produtos', {
      titulo: 'Nossos produtos',
      itensParaView: meusItens // Passando o array para a view
    });
  });

  module.exports = router;
