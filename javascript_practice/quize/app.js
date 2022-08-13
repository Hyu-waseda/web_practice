const quiz = [
  {
    question: 'ゲーム史上、最も売れたゲーム機は次のうちどれ？',
    answers: ['スーパーファミコン', 'プレイステーション2', 'ニンテンドースイッチ', 'ニンテンドーDS'],
    correct: 'ニンテンドーDS'
  }, {
    question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
    answers: ['MOTHER2', 'スーパーマリオブラザーズ3', 'スーパードンキーコング', '星のカービィ'],
    correct: 'MOTHER2'
  }, {
    question: 'ファイナルファンタジーⅣの主人公の名前は？',
    answers: ['フリオニール', 'クラウド', 'ティーダ', 'セシル'],
    correct: 'セシル'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');

const buttonLength = $button.length;
//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  for (let i = 0; i < buttonLength; i++) {
    $button[i].textContent = quiz[quizIndex].answers[i];
  }
}
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解');
    score++;
  } else {
    window.alert('不正解');
  }
  quizIndex++;
  if(quizIndex < quizLength){
    setupQuiz();
  } else {
    window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です!');
  }
  
}

for (let i = 0; i < buttonLength; i++) {
  $button[i].addEventListener('click', (e) => {
    clickHandler(e);
  });
}

/* $button[0].addEventListener('click', (e) => {
  clickHandler(e);
});
$button[1].addEventListener('click', (e) => {
  clickHandler(e);
});
$button[2].addEventListener('click', (e) => {
  clickHandler(e);
});
$button[3].addEventListener('click', (e) => {
  clickHandler(e);
}); */
/* i = 0;
while(i < 4){
  //ボタンをクリックしたら正誤判定
  $button[i].addEventListener('click', () => {
    if(correct === $button[i].textContent) {
      window.alert('正解');
    } else {
      window.alert('不正解');
    }
  });
  i++;
} */
/* //ボタンをクリックしたら正誤判定
document.getElementsByTagName('button')[0].addEventListener('click', () => {
  if(correct === document.getElementsByTagName('button')[0].textContent) {
    window.alert('正解');
  } else {
    window.alert('不正解');
  }
}); */


