const test1 = () => {
  const p = document.querySelectorAll('p');
  p[1].style.color = 'red';
  p[1].style.backgroundColor = '#000';
}

const integerNumber = () => {
  for(let i = 1; i < 100; i++) {
    if(i % 21 === 0) {
      console.log('openSource');
    } else if(i % 3 == 0) {
      console.log('open');
    } else if(i % 7 === 0) {
      console.log('source');
    } else {
      console.log(i);
    }
    
  }
}

const containerChildren = () => {
  const container = document.querySelectorAll('.container');
  const div = container[1].querySelectorAll('div');
  div.forEach(item => {
    console.log(item);
  });
}

const sumInteger = () => {
  const arr = [1, 3, 'a', 'arr', 9.1, 100, 9.3, '1', 30];
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    if(Number.isInteger(arr[i])) {
      sum += arr[i];
    }
    
  }
  console.log('Test4 ' + sum);
}

const getData = (url, callback) => {
  const request = new XMLHttpRequest();
  request.open('GET', url);

  request.addEventListener('readystatechange', () => {
    if(request.readyState !== 4) return;
    if(request.status === 200) {
      const response = JSON.parse(request.response);
      callback(response);
    } else {
      new Error('Unexpected status code: ' + request.status)
    }
  });

  request.send();
};

const getId = (id) => {
  id.forEach(item => {
    if(item.id === 5) {
      console.log(item);
    }
  })
}

getData('https://jsonplaceholder.typicode.com/posts', getId);

const regularExp = () => {
  const str = 'Softeq вализвщалп #rules podfkbp #Rules dpfog Softeq';

  const res = str.match(/Softeq|#rules/ig);
  console.log(res);
}

const verify = () => {
  let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function quize() {
  let quizeNumber = Math.floor(Math.random() * 10001);
  let userAttempt = 50;
  console.log('Загаданное число: ' + quizeNumber);

  let userGreeting = function(ask) {
    if (ask) {
      getNumber();
    } else {
      alert('Приходите еще!');
    }
  }

  let attempts = function (attempt) {
    attempt--;
    return attempt;
  }

  let incorrectAnswer = function(userAnswer) {
    userAttempt = attempts(userAttempt);
    userGreeting(userAnswer);
  }
  
  let getNumber = function() {

    let userAnswer, writeNumber = prompt('Угадай число от 1 до 10000');
    
    if (writeNumber === null) {
      alert('Приходите еще!');
    } else if (!isNumber(writeNumber) || (parseFloat(writeNumber) > 10000)) {
      userAnswer = confirm('Введите число от 0 до 10000!');
      userGreeting(userAnswer);
    } else if (writeNumber == quizeNumber) {
      userAnswer = confirm('0');
      if (userAnswer) {
        quizeNumber = Math.floor(Math.random() * 10001);
        userAttempt = 50;
        console.log('Загаданное число: ' + quizeNumber);
        game();
      }
    } else if (userAttempt > 1) {
      if (writeNumber < quizeNumber) {
        userAnswer = confirm('1 ' );
        incorrectAnswer(userAnswer);
      } else if (writeNumber > quizeNumber) {
        userAnswer = confirm('-1 ');
        incorrectAnswer(userAnswer);
      }
    } else if (userAttempt === 1) {
      userAnswer = confirm('Попытки закончились, хотите сыграть еще?');
      if (userAnswer) {
        quizeNumber = Math.floor(Math.random() * 10001);
        userAttempt = 50;
        console.log('Загаданное число: ' + quizeNumber);
        game();
      }
    }
  }
  return getNumber;
}

let game = quize();
game();

}

verify();
test1();
integerNumber();
containerChildren();
sumInteger();
regularExp();