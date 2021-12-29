let a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];
let arrayDefautl = ['a','b','c','1','2','n','t'];
let arr = ['a','b','c',1,2,'n','t',4,8,0,10];

function lesson1(){
    for (let i in a) {
        console.log("row" + i)
        for (let j in a[i]) {
            console.log(a[i][j]);
        }
    }

}
function lesson2() {
    sortArr = arrayDefautl.sort();
    document.write(`array reversed : ${sortArr}`)
}

function lesson3() {
    count = 0;
    for (let i = 0; i < arr.length; i++){
        if(typeof arr[i] == 'number'){
            
            count++;
        }
    }
    document.write(`in the array with numeric characters is : ${count}`);
}

function lesson4() {
    count = 0;
    for (let i = 0; i < arr.length; i++){
        if(typeof arr[i] == 'string'){
            
            count++;
        }
    }
    document.write(`in the array with the number of words : ${count}`);

}
let str = `<div> 
<input type="text" id="number1">Type Number<br>
<input type="text" id="number2">Type Number<br>
<button onclick="runLesson()">Run</button>
</div>`;
document.querySelector('#lesson5').addEventListener("click",runLesson5);
function runLesson5() {
    document.getElementById('lessonX').innerHTML = str;

}
function runLesson() {
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    let num1 = number1.split('');
    let num2 = number2.split('');
    for (let i = 0; i < num1.length; i++) {
        if(num1[i] == num2[i]){
            alert(`two array are the same`);
            break;
        } else {
            alert(`two array are not the same`);
            break;
        }
    }
}

let xb = `<div> 
<input type="text" id="arrayX">Type Array<br>
<button onclick="runLessonY()">Run</button>
<p id="showArrayXY"></p>
</div>`;
document.querySelector('#lesson6').addEventListener("click",runLesson6);
function runLesson6() {
    document.getElementById('lessonY').innerHTML = xb;
}

function runLessonY() {
    let text = document.getElementById('arrayX').value;
    let arrText = text.split('');
    let len = text.length;
    for (let i = 0; i < len; i++ ) {
        if (arrText[i] == '-') {
            arrText.splice(i,1,'_')
           
            // return text;
        }
    }
    document.getElementById('showArrayXY').innerHTML = arrText;
}
