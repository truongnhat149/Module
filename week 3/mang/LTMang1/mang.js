
function createArray(min, max) {
    arr = [];
    let size = Number(document.getElementById('size').value);
    let min = Number(document.getElementById('min').value);
    let max = Number(document.getElementById('max').value);

    for (let i = 0;i < size; i++) {
        arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
    
    }
    document.getElementById('showLesson1').innerHTML = arr;
}