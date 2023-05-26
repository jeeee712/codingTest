let arr = [
  { name: "홍길동", score: 90 },
  { name: "김철수", score: 85 },
  { name: "박영희", score: 97 },
];

function compare(a, b) {
  return b.score - a.score;
}

arr.sort(compare);

console.log(arr);
