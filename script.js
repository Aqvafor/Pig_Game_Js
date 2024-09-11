'use strict';


/*
//Selecting elements
//Используем выбор элемента по id, а не по классу. Мы используем  #
const score0El = document.querySelector('#score--0'); //Очки 1го игрока
// Выбор элемента по id с помощью другого метода  getElementById. КОГДА МЫ ИСПОЛЬЗУЕМ ДАННЫЙ МЕТОД МЫ МОЖЕМ ПИСАТЬ ПРОСТО НАЗВАНИЕ АЙДИ БЕД  #

//getElementById также немного быстрее чем выбор элемента по querySelector
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');



//Staring conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// Это массив который будет содержать очки игроков
const scores = [0,0];
let currentScore = 0;
//Изначально у активного игрока(при начале игры и перехода хода) будет отображаться 0 очков
//Переменная которое будет отвечать за активного игрока
let activePlayer = 0;

//Rolling dice funcionality

//Так как мы не будем несколько раз использовать функцию напишем ее ниже
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  let dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);


  // 2. Display dice
  diceEl.classList.remove('hidden');
  //Меняем источник картинки чтобы поменялась картинка в зависимоти от рандомного чсла
  diceEl.src = `dice-${dice}.png`;




  // 3. Check for rolled 1
  if (dice !== 1) {
    //Add dice current score
    currentScore += dice;
    //Динамически игрока выбираем(то есть менется переменная а не захоркожена)
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
   
  } else {
    // swith to the next player; меняем игрока через значение переменной activePlayer
    //Обнуляем очки при смене игрока
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0; // Если активный игрок имеет 0, то будет меняться на 1, а если игрок имеет 1 то поменяется значение на 0 

    //С помощью метода toggle Класс будет либо удаляться либо появляться(то есть переключаться)
    player0El.classList.toggle('player--active'); //player-active менят цвет бэка( прописан в css)
    player1El.classList.toggle('player--active'); //player-active менят цвет бэка( прописан в css)
  }
});
*/



/*
//Holding current score
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');



//Staring conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
// Когда игра начнется переменаая будетв значении тру, а когда наберется 100 или более очков, то буде фолс и игра прекратиться
let playing = true;

const swithPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

//Rolling dice funcionality

btnRoll.addEventListener('click', function () {
  if(playing){

    // 1. Generating a random dice roll
    let dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);
    
    
    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    
    
    // 3. Check for rolled 1
    if (dice !== 1) {
      //Add dice current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
      
    } else {
      // swith to the next player; меняем игрока через значение переменной activePlayer
      swithPlayer();
    }
  }
});


//Hold functionality
btnHold.addEventListener('click', function () {
  if(playing){

 
  // 1. Add current score to active players's score
  // scores[1] = scores[1] + currentScore; // Более верно ниже
  scores[activePlayer] += currentScore; // То есть динамически определиться какому игроку добавлть очки через массив
  // console.log(scores[activePlayer]); // Чтобы отследить событие и понять где ошибка

  //У активного игрока будет показываться его очки 
  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  //2. CHeck if player's score is >= 100
  
  if (scores[activePlayer] >= 100) {
    // Finish
    playing = false;
    diceEl.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    //Убираем класс активного игрока, так как уже есть победитель 
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  } else {
    //Swith to the next player
    swithPlayer();
  }
}

})
*/




// Resetting the Game

//Holding current score
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');



//Staring conditions
let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
}

init(); // Вызовим функцию для начала игры

const swithPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

//Rolling dice funcionality

btnRoll.addEventListener('click', function () {
  if (playing) {

    // 1. Generating a random dice roll
    let dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);    

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      //Add dice current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    } else {
      // swith to the next player; меняем игрока через значение переменной activePlayer
      swithPlayer();
    }
  }
});


//Hold functionality
btnHold.addEventListener('click', function () {
  if (playing) {

    // 1. Add current score to active players's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    //2. CHeck if player's score is >= 100

    if (scores[activePlayer] >= 100) {
      // Finish
      playing = false;
      diceEl.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
      //Swith to the next player
      swithPlayer();
    }
  }

})

// Resetting the Game

btnNew.addEventListener('click', init)