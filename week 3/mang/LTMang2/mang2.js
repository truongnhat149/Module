let a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];
let arrayDefautl = ['a','b','c','1','2','n','t'];

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
    let length = arrayDefautl.length;
    count = 0;
    for (let i in arrayDefautl){
        if(i == typeof String){
            
            count++;
        }
    }
    document.write(count);
}