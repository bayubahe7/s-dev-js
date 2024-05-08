/*
//document.querySelector('.js-moves').innerHTML = `You ${playerMove} - ${computerMove} Computer`;
document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-img" alt=""> <img src="images/${computerMove}-emoji.png" class="move-img" alt=""> Computer`;
*/

 // how below code works check if left side is true and if not it flip to the right side as default value.
 let scOre = JSON.parse(localStorage.getItem('scOre')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

//because in reset button we removed score when we click button it will give us null 
// to avoid this we set a default values when we clicked reset button
/*
if (scOre === null){
scOre = {
  wins: 0,
  losses: 0,
  ties: 0
};
}

// above codes shortcut using not operator is below
if (!scOre){
scOre = {
  wins: 0,
  losses: 0,
  ties: 0
};
}

*/
// or we can use or operator (default operator to set default values when there is no score check at beginning of this script)
updatedScore ();



function playGame (playerMove) {

      pickComputerMove();

let result = '';

if (playerMove === 'Rock') {
  if (computerMove === 'Rock') {
result = 'Tie.';
} else if (computerMove === 'Paper') {
result = 'You lose.';
} else if (computerMove === 'Scissors') {
result = 'You win.'
}
} else if (playerMove === 'Paper') {
  if (computerMove === 'Rock') {
  result = 'You win.';
  } else if (computerMove === 'Paper') {
  result = 'Tie.';
  } else if (computerMove === 'Scissors') {
  result = 'You lose.'
  }
} else if (playerMove === 'Scissors') {
  if (computerMove === 'Rock') {
    result = 'You lose.';
    } else if (computerMove === 'Paper') {
    result = 'You win.';
    } else if (computerMove === 'Scissors') {
    result = 'Tie.'
    }

}
if (result === 'You win.') {
  scOre.wins += 1;
} else if (result === 'You lose.') {
  scOre.losses += 1;
} else if (result === 'Tie.') {
  scOre.ties += 1;
}

localStorage.setItem('scOre', JSON.stringify(scOre));

updatedScore ();

document.querySelector('.js-result').innerHTML = result;
document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-img"> <img src="images/${computerMove}-emoji.png" class="move-img"> Computer`;

}


function updatedScore () {
document.querySelector('.js-score')
   .innerHTML = `Wins:${scOre.wins},Losses: ${scOre.losses}, Ties: ${scOre.ties}`;
}

let computerMove = '';
function pickComputerMove() {
    const randomNumber = Math.random();

    if (randomNumber >= 0  && randomNumber < 1/3) {
    computerMove = 'Rock';
    } else if (randomNumber >= 1/3 &&  randomNumber < 2 / 3) {
    computerMove = 'Paper';
    } else if (randomNumber >= 2 / 3 &&randomNumber < 1) {
    computerMove = 'Scissors';
    }

}