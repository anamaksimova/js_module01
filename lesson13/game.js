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
        let userChoiceComp = '5';
      if (lang === 'EN' || lang === 'ENG'){
        const userChoice = prompt('rock, scissors, paper?');
        if (userChoice === null) {
            const answer = confirm('Are you sure you want to exit this game?');
            if (answer) {
              return userChoiceComp = 'showResult';
            } else {
              return userChoiceComp = null;
            }
          }
      
          if (userChoice.toLowerCase().charAt(0) === 'r') {
            userChoiceComp = 'rock';
          }
          if (userChoice.toLowerCase().charAt(0) === 's') {
            userChoiceComp = 'scissors';
          }
          if (userChoice.toLowerCase().charAt(0) === 'p') {
            userChoiceComp = 'paper';
          }
      } else {
    const userChoice = prompt('Камень, ножницы, бумага?');

  
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
      const pcChoice = lang[getRandomIntInclusive(0, 2)];
      const userCh = getFigure(language);
      console.log(pcChoice);
      console.log(userCh);

      if (userCh === null) {
        start();
      }
      if(language === 'EN' || language === 'ENG' ){
        if (userCh === 'showResult') {
            return alert(`
                        Computer won ${result.computer} times. 
                        Player won  ${result.player} times. `);
          }
          if (userCh === pcChoice) {
            alert('drawn game');
          }
          if ((userCh === 'rock') && (pcChoice === 'scissors')) {
            result.player++;
            alert('Player win');
          }
    
          if (userCh === 'scissors' && pcChoice === 'rock') {
            result.computer++;
            alert(' Computer win');
          }
          if (userCh === 'rock' && pcChoice === 'paper') {
            result.computer++;
            alert('  Computer won');
          }
    
          if (userCh === 'paper' && pcChoice === 'rock') {
            result.player++;
            alert('Player win');
          }
          if (userCh === 'scissors' && pcChoice === 'paper') {
            result.player++;
            alert('Player win');
          }
    
          if (userCh === 'paper' && pcChoice === 'scissors') {
            result.computer++;
            alert(' Computer won');
          }
      } else{

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

      }

      start();
    };
  };

  window.RPS = game;
})();
