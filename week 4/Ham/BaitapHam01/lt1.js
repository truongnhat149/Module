// var a = document.getElementById('number1');
// var b = document.getElementById('number2');


// // bai1
// function alertMessage() {
//     alert('hello')
// }
// bai2
// function alertNumber(num) {
//     return Number(num) + 1;
// }

// function result() {
//     $("#NumAdded").text(
//         alertNumber($(#AddNum).val())
//     );
// }
// bai3


function Sum(a, b) {

    if (a > b || a == b) {
        alert('Retype a number')
    } else {
        alert(a + b)
    }

}
// Sum(1, 2)
// bai 4
function addNumber(firstNum, secondNum) {
    firstNum = 4;
    secondNum = 8;
    result = firstNum + secondNum;
    alert(result);
}

// gọi hàm duyệt mảng tìm ngôi sao
function searcHStar() {
    var star = ['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus'];
    var star2 = ['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila', 'Ursa Major', 'Leo'];
    stringg = document.forms['searchStar']["star1"].value;
    searchh = star.indexOf(stringg);
    for (let i of star) {

        if (searchh != -1) {
            document.getElementById('starhere').innerHTML = star2[searchh];
            
        } else {
            document.getElementById('starhere').innerHTML = "Không tìm thấy";
    
        }
    }
}