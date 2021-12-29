var arr = [];
function createArray() {
    arr;
    let size = Number(document.getElementById('size').value);
    let min = Number(document.getElementById('min').value);
    let max = Number(document.getElementById('max').value);

    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * (max - min + 1) + min);

    }
    document.getElementById('showLesson1').innerHTML = arr;
}

function lesson1() {
    var lengthArr = arr.length;
    var count = 0;
    for (let i = 0; i < lengthArr; i++) {
        if (arr[i] >= 10) {
            count++;
        }
    }
    document.getElementById('lessonNumberInteger').innerHTML = `Larger number ${count}`;
}

function lesson2() {
    max = arr[0];
    var lengthArr = arr.length;
    
    for (let findMax = 0; findMax < lengthArr; findMax++) {
        if ( max < arr[findMax] ) {
             max = arr[findMax] ;

        }
    }
    document.getElementById('maxNumber').innerHTML = `the largest number is : ${max} ,
    located in position : ${arr.indexOf(max)}`;
}

function lesson3() {
    var lengthArr = arr.length;
    max = arr[0];
    sum = 0;
    for (let findMax = 0; findMax < lengthArr; findMax++) {
        if ( max < arr[findMax] ) {
             max = arr[findMax] ;
        }
        sum += arr[findMax];
    }
    let avg = sum / lengthArr;
    document.getElementById('maxAvg').innerHTML = `${avg}`;
}

function lesson4() {
    let sortArr = arr.sort();
    document.getElementById('sortArr').innerHTML = `reversed array is ${sortArr}`;
}

function lesson5() {
    let count = 0;
    var lengthArr = arr.length;
    for (let find = 0; find < lengthArr; find++) {
        if ( arr[find] < 0 ) {
             count++;
        }
    }
    document.getElementById('negativeInteger').innerHTML = `negative integers is : ${count}`;
}

function lesson6() {
    var lengthArr = arr.length;
    let numberInter = Number(document.getElementById('numberInter').value);
    for (let i = 0; i < lengthArr; i++) {
        if (arr.includes(numberInter)) {
            alert(`V is in the array`)
            break;
        } 
        else {
            alert(`V is not in the array`)
            break;
        }
    }
}

function lesson7() {
    var lengthArr = arr.length;
    let findNum = Number(document.getElementById('findNum').value);
    for (let i = 0; i < lengthArr; i++) {
        if (arr.includes(findNum)) {
            arr.splice(i-1, 1);
            arr.push(findNum);
        }
    }
}

function lesson8() {
    let sortArr = arr.sort(function(a, b) {
        return b - a;
    }
    );

    document.getElementById('sortArrAZ').innerHTML = sortArr;
}

let str = `<div>
<input type="number" id="numberArrayOne">type number<br>
<input type="number" id="numberArrayTwo">type number<br>
<button onclick="randomArray()">show 2 array</button>
</div>`;
document.getElementById('show').addEventListener("click", callArray)

var arr2 = []
function callArray() {
    document.getElementById('showArray').innerHTML = str;
}
function randomArray() {

    let size = 10;
    arr,arr2;
    let min = Number(document.getElementById('numberArrayOne').value);
    let max = Number(document.getElementById('numberArrayTwo').value);
    
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    for (let j = 0; j < size; j++) {
        arr2[j] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    document.querySelector('.showArr').innerHTML = `Array A : ${arr}`;
    document.querySelector('.showArr2').innerHTML = `Array B : ${arr2}`;
    document.querySelector('.showArr3').innerHTML = `Array C : ${arr.concat(arr2)}`
}