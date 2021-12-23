
// document.getElementById('showMatrix').innerHTML = 
   // nút
   function run() {
    document.getElementById('showMatrix').innerHTML = " ";
    var lengthMatrix = document.getElementById('lengthMatrix').value;
    var min = document.getElementById('min').value;
    var max = document.getElementById('max').value;
    runMatrix(lengthMatrix,min,max)
}

function runMatrix(lengthMatrix, min, max) {
    var matrix = [];
    for (let i = 0; i < lengthMatrix; i++) {
        matrix[i] = [];
        for (let j = 0; j < lengthMatrix; j++) {
            matrix[i][j] = Math.floor(Math.random() * (max - min + 1) + min);
        }
        document.getElementById('showMatrix').innerHTML += matrix[i] + '<br>'
    }
    
}

