//  'use strict'

(() => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const getMarbleNumber = (number) => {
    let userChoice = +prompt(`Загадай число шариков от 1 до ${number}`);
    console.log('userChoice: ', userChoice);
    if (userChoice > 0 && userChoice <= number) {
      return userChoice;
    } else if (userChoice === 0 || userChoice > number) {
      const answer = confirm('Are you sure you want to exit this game?');

      if (answer) {
        userChoice = 'stop';

        // не получается закончить игру, она идет на новый круг сразу, не нашла, что надо исправить

        alert('игра завершена');
      } else {
        userChoice = +prompt(`Загадай число шариков от 1 до ${number}`);
      }
    }

    return userChoice;
  };

  const game = () => {
    const marbles = {
      player: 5,
      computer: 5,
    };
    let playAgain = 'yes';
    const computerStep = () => {
      const pcNum = getRandomIntInclusive(1, marbles.computer);
      const pcChoice = !(pcNum % 2) ? 'четное' : 'нечетное';
      let userCh = '';
      const usernum = +confirm(`Компьютер загадал число. Число четное?`);
       usernum === 1 ? userCh = 'четное' : userCh = 'нечетное';

       if (userCh === pcChoice) {
         marbles.computer -= pcNum;
         marbles.player += pcNum;

        marbles.computer <= 0 || marbles.player <= 0 ?
        playAgain = confirm(`игра закончена проиграл ${marbles.computer <= 0 ? 'компьтер' : 'игрок'} 
            Хотите сыграть еще?`) : playerStep();
       } else {
         marbles.player -= pcNum;
         marbles.computer += pcNum;
        marbles.computer <= 0 || marbles.player <= 0 ?
        playAgain = confirm(`игра закончена проиграл ${marbles.computer <= 0 ? 'компьтер' : 'игрок'} 
         Хотите сыграть еще?`) : playerStep();
       }
       if (playAgain) {
         game()();
       } else {
         return;
       }
    };


    const playerStep = () => {
      const a = ['четное', 'нечетное'];
      const usernum = getMarbleNumber(marbles.player);
      if (usernum === 'stop') {
        return alert('игра завершена');
      }

      const pcChoice = a[Math.floor(Math.random() * a.length)];
      const userCh = !(usernum % 2) ? 'четное' : 'нечетное';

      if (userCh === pcChoice) {
        marbles.computer += usernum;
        marbles.player -= usernum;

        marbles.computer <= 0 || marbles.player <= 0 ?
        playAgain = confirm(`игра закончена проиграл ${marbles.computer <= 0 ? 'компьтер' : 'игрок'} 
         Хотите сыграть еще?`) : computerStep();
        console.log(playAgain);
      } else {
        marbles.player += usernum;
        marbles.computer -= usernum;

        marbles.computer <= 0 || marbles.player <= 0 ?
        playAgain = confirm(`игра закончена проиграл ${marbles.computer <= 0 ? 'компьтер' : 'игрок'} 
         Хотите сыграть еще?`) : computerStep();
      }

      if (playAgain) {
        game()();
      } else {
        return;
      }
    };

    return function start() {
      const FIGURES_RU = ['камень', 'ножницы', 'бумага'];

      const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      };

      const getFigure = () => {
        const userChoice = prompt('Определим, кто первый будет ходить. Камень, ножницы, бумага?');

        let userChoiceComp = '5';
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


      const firstStep = () => {
        const pcChoice = FIGURES_RU[getRandomIntInclusive(0, 2)];
        const userCh = getFigure();

        if (userCh === pcChoice) {
          alert('ничья,   переиграем');
          firstStep();
        }
        if ((userCh === 'камень') && (pcChoice === 'ножницы')) {
          alert('выйграл игорок  и он ходит первым');
          playerStep();
        }

        if (userCh === 'ножницы' && pcChoice === 'камень') {
          alert('выйграл компьютер и он ходит первым');
          computerStep();
        }
        if (userCh === 'камень' && pcChoice === 'бумага') {
          alert('выйграл компьютер и он ходит первым');
          computerStep();
        }

        if (userCh === 'бумага' && pcChoice === 'камень') {
          alert('выйграл игорок и он ходит первым');
          playerStep();
        }
        if (userCh === 'ножницы' && pcChoice === 'бумага') {
          alert('выйграл игорок и он ходит первым');
          playerStep();
        }

        if (userCh === 'бумага' && pcChoice === 'ножницы') {
          alert('выйграл компьютер и он ходит первым');
          computerStep();
        }
      };


      firstStep();
    };
  };

  window.marble = game;
})();
