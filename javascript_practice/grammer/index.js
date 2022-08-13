//変数
let unko = 'Hello World!';

//unko = 'Hello Woeld2!!';

//定数
const bigUnko = 'He..Hell...Hello World!'

// bigUnko = 'hoge'

//配列
const inoki = ['いーち', 'にー', 'さーん', 'ダー']

//ループ文
/* let i = 0;
while(i < inoki.length){
  console.log(inoki[i]);
  i++;
} */

//条件分岐
/* if(inoki.length > 5){
  console.log('ボンバイエ！');
} else {
  console.log('ボンバ...!');
} */

//関数
const test = (arg) => {
  if(inoki.length > arg){
    console.log('ボンバイエ！');
  } else {
    console.log('ボンバ...!');
  }
};

//オブジェクト (=データの塊)
const unko2 = {
  color: 'pink',
  size: 'large',
  purfume: 'mint',
  goToilet: () => {
    console.log('Hello world!');
  }
};

//console.log(window.innerHeight);
//window.alert('Hello world!!!');

document.getElementsByTagName('button')[0].addEventListener('click', () => {
  window.alert('Hello World!!!!!!');
});