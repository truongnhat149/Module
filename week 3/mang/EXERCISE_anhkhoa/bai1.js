var square_1 = 10;
var square_2 = 90;
// var square_3 = 40;
var totalOnPrimary = 0;
var total = 0;
var total2 = 0;
var matrix = [];
var size = 4;

let show = document.getElementById('show')

for (let i = 0; i < size; i++) {
  matrix[i] = []
  for (let j = 0; j < size; j++) {
    matrix[i][j] = Math.floor(Math.random() * (square_2 - square_1 + 1) + square_1)
  }
  show.innerHTML += matrix[i] + '<br>'
}


//tinh tong cac so chẵn trong ma trận
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
   
  }
  console.log( `${matrix[i][j] % 2 == 0 ? (total += matrix[i][j]) : ''}`);
}
     
//tinh tong cac duong cheo chinh
for (let i = 0; i < size; i++) {
  totalOnPrimary += matrix[i][i]
}
console.log(totalOnPrimary)

//tính tổng các đường chéo phụ
// for (let i = 9; i > 0; i--) {

//     total2 += matrix[i][i];

//     }

// console.log(total2)
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
       if(j == size - i) {
         total2 += matrix[i][j]
       }
    }
    
  }
  console.log(total2)