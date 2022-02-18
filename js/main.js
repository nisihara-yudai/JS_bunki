// if文
// const price = 2500;

// if(price < 1500){
//   console.log("安い");
// }else if(price > 2100){
//   console.log("高い");
// }else{
//   console.log("ちょうど良い");
// }

// 三項演算子
const people = 1000;

const baseball_member = (people <= 1500) ? "少ない" : "多い";

console.log(baseball_member);

// switch文
const number = 1;

switch (number) {
  case 1:
    console.log("鈴木誠也");
    break;

  case 2:
    console.log("田中広輔");
    break;

  case 3:
    console.log("衣笠祥雄");
    break;
}

// 問題1. ２つの定数price、taxを作り、それぞれの定数を使用して1000円の10%を求めてみましょう
// const price = 1000;
// console.log(price);

// const tax = 0.1;
// console.log(tax);

// const sam = price * tax;
// console.log(sam);

// 問題2. 1 A君とB君、それぞれの合計点数をコンソール画面に出力して下さい
const score_a = 80 + 90 + 60 + 85 + 100;
console.log(score_a);

const score_b = 40 + 30 + 50 + 25 + 60;
console.log(score_b);

// 問題2. 2 A君とB君、それぞれの合計点数が300以上の場合、コンソール画面に「素晴らしい」と、どちらか片方が300以上の場合は、「普通」を、どちらも300点以上より下の場合は「頑張ろう」とコンソール画面に出力して下さい
if (score_a >= 200 && score_b >= 200) {
  console.log("素晴らしい");
} else if (score_a >= 200 || score_b >= 200) {
  console.log("普通");
} else {
  console.log("頑張ろう");
}

// 問題3. switch文を利用して「大吉」「中吉」「小吉」「吉」「末吉」「凶」「大凶」の条件分岐を行い、メッセージを表示して下さい。メッセージは大吉の場合、「大吉です！」などです。
const fortune = 1;

switch (fortune) {
  case 1:
    console.log("大吉です！");
    break;

  case 2:
    console.log("中吉です！");
    break;
  
  case 3:
    console.log("小吉です！");
    break;
  
  case 4:
    console.log("吉です！");
    break;

  case 5:
    console.log("末吉です！");
    break;
  
  case 6:
    console.log("凶です！");
    break;
  
  case 7:
    console.log("大凶です！");
    break;
}

// 問題4 下記のif文を三項演算子で書き換えて下さい
// const price = 1800;

// if (price < 1000) {
//   console.log("安い");
// } else if (price > 2000) {
//   console.log("高い");
// } else {
//   console.log("丁度良い");
// }

// 参考資料を元にしてコードを記述した。
const price = 1800;

const feeling = (price > 2000) ? (price > 1000 ) ?  "安い" : "高い" : "丁度良い";

console.log(feeling);