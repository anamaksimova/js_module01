//  'use strict'

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RU = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getFigure = (lang) => {
    const userChoice = prompt('Камень, ножницы, бумага?');

    let userChoiceComp = '5';
    if (userChoice === null) {
      const answer = confirm('Точно больше не хотите сыграть?');
      if (answer) {
        return userChoiceComp = 'showResult';
      } else {
        return userChoiceComp = null;
      }
    }

    if (userChoice.toLowerCase().charAt(0) === 'к') {
      userChoiceComp = 'камень';
    }
    if (userChoice.toLowerCase().charAt(0) === 'н') {
      userChoiceComp = 'ножницы';
    }
    if (userChoice.toLowerCase().charAt(0) === 'б') {
      userChoiceComp = 'бумага';
    }

    return userChoiceComp;
  };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };

    const lang = language === 'EN' || language === 'ENG' ?
        FIGURES_ENG : FIGURES_RU;

    return function start() {
      const pcChoice = FIGURES_RU[getRandomIntInclusive(0, 2)];
      const userCh = getFigure('ru');

      if (userCh === null) {
        start();
      }
      if (userCh === 'showResult') {
        return alert(`
                    Компьютер выграл ${result.computer} раз. 
                    Игрок выйграл  ${result.player} раз. `);
      }
      if (userCh === pcChoice) {
        alert('ничья');
      }
      if ((userCh === 'камень') && (pcChoice === 'ножницы')) {
        result.player++;
        alert('выйграл игорок');
      }

      if (userCh === 'ножницы' && pcChoice === 'камень') {
        result.computer++;
        alert('выйграл компьютер');
      }
      if (userCh === 'камень' && pcChoice === 'бумага') {
        result.computer++;
        alert('выйграл компьютер');
      }

      if (userCh === 'бумага' && pcChoice === 'камень') {
        result.player++;
        alert('выйграл игорок');
      }
      if (userCh === 'ножницы' && pcChoice === 'бумага') {
        result.player++;
        alert('выйграл игорок');
      }

      if (userCh === 'бумага' && pcChoice === 'ножницы') {
        result.computer++;
        alert('выйграл компьютер');
      }

      start();
    };
  };

  window.RPS = game;
})();
