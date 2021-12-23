function runLesson1() {
    let squareNumber = document.getElementById('squareNumber').value;

    alert(`Square of the number just entered ${squareNumber*2}`);
}

function runLesson2() {
    let circleNumber = document.getElementById('circleNumber').value;

    document.getElementById('showCircle').innerHTML = `Diameter circle 'chu vi' ${circleNumber * 2 * 3.14}`;
    document.getElementById('showCircle1').innerHTML = `Acreage Circle 'diện tích' ${Math.pow(circleNumber, 2) * 3.14}`;
}

function runLesson3() {
    let factorial = Number(document.getElementById('factorial').value);
    let total = 1;

    if (factorial == 1) {
        // return factorial;
        document.getElementById('showfactorial').innerHTML = `Factorial of type number  'giai thừa của số vừa nhập vào'  ${factorial}`;
    } else {

        for (let i = 1; i <= factorial; i++) {
            total *= i;
            document.getElementById('showfactorial').innerHTML = `Factorial of type number  'giai thừa của số vừa nhập vào'  ${total}`;
        }
    }
}

function runLesson4() {
    let numberRight = Number(document.getElementById('numberRight').value);

    if (isNaN(numberRight)) {
        document.getElementById('showNumberRight').innerHTML =
            `Bạn nhập chuỗi rồi: You just entered the string !!! You  must enter the number`;

    } else {
        document.getElementById('showNumberRight').innerHTML = `OK. You entered the number`;
    }
}

function runLesson5() {
    let smallNumber = Number(document.getElementById('smallNumber').value);
    let smallNumber2 = Number(document.getElementById('smallNumber2').value);
    let smallNumber3 = Number(document.getElementById('smallNumber3').value);
   
    switch (true) {
        case smallNumber > smallNumber2 && smallNumber > smallNumber3:
            document.getElementById('showGTNN').innerHTML =  `Smallest ${smallNumber}`          
            break;
        case smallNumber2 > smallNumber && smallNumber2 > smallNumber3:
            document.getElementById('showGTNN').innerHTML =  `Smallest ${smallNumber2}`          
            break;
        case smallNumber3 > smallNumber2 && smallNumber3 > smallNumber2:
            document.getElementById('showGTNN').innerHTML =  `Smallest ${smallNumber3}`          
            break;
    }
}

function runLesson6() {
    let isInteger = Number(document.getElementById('isInteger').value);
    switch (true) {
        case isInteger > 0 && isInteger %1 == 0:
            document.getElementById('showInteger').innerHTML = `Yes! Correct positive Integer ${isInteger}`;
        break;
        case isInteger < 0:
        document.getElementById('showInteger').innerHTML = `Oh No!!! Please re-enter `;
    }
}

function runLesson7() {
    let transposition = Number(document.getElementById('transposition').value);
    let transposition2 = Number(document.getElementById('transposition2').value);
    let temp;

    temp = transposition;
    transposition = transposition2;
    transposition2 = temp;

    document.getElementById('showTransposition').innerHTML = `The two numbers just changed are :
    ${transposition},${transposition2}`
}

function runLesson8() {
    let string = document.getElementById('array').value;
    let array = [];

    array = string.split('').reverse();
    document.getElementById('showArray').innerHTML = `Array after repositioning  ${array}`
}

function runLesson9() {
    let string = document.getElementById('arrayRandom').value;
    let array = ['s','z','a',3,'t','r','q',3,4,5,6,4,'t','a'];
    let x = 0;
    let time = 0;
    // array = string.split('');
    // alert(array);

    for (let i = 0; i < array.length; i++) {
        if (string == array[i]) {
            x = 1;
            time++;
        // } else {
            // return -1;
        }
    }
    if (x == 1) {
        alert(`in array số lần ${time}`)
    } else {
        alert(`-1`)
    }
}