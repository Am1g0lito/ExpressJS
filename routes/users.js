var express = require('express');
var router = express.Router();

// Rota principal para renderizar nossa lista
router.get('/', (req, res) => {
    // 3. Dados dinâmicos (nosso vetor de elementos)
    const meusUsuarios = [
      { id: 1, nome: 'Giorndana', turma: '3A.' },
      { id: 2, nome: 'Josias', turma: '3A' },
      { id: 3, nome: 'Giovanna', turma: '3A' },
      { id: 4, nome: 'Pietro', turma: '3A' },
      { id: 5, nome: 'Leo', turma: '3A' },
      { id: 6, nome: 'Vanny', turma: '3A' },
      { id: 7, nome: 'Pâmela', turma: '3A' },
      { id: 8, nome: 'fulanio', turma: '3A' }
    ];
  
    // 4. Renderizar a view 'lista.ejs' passando os dados
    // O segundo argumento de res.render() é um objeto.
    // As chaves desse objeto (ex: 'titulo', 'itensParaView') se tornam
    // variáveis disponíveis dentro do template EJS.
    res.render('usuarios', {
      titulo: 'Meus usuários',
      UsuariosParaView: meusUsuarios // Passando o array para a view
    });
  });

  module.exports = router;
