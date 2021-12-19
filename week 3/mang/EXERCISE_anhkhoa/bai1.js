let square_Edge1 = 10;
let square_Edge2 = 90;
let square_Edge3 = 40;
let total = '';
let size = 10;
let arrs = [];
let arrs2 = [];

function display1() {
    for (let i = 0; i < size; i++) {
        arrs[i] = [];
        for (let j = 0; j < size; j++) {
            arrs[i][j] = Math.floor(Math.random() * (square_Edge2 - square_Edge1 + 1) + square_Edge1);
        }
    }
    document.getElementById('showMatrix').innerHTML = `${arrs} `
}


    display1();
    display2();
    // calculation Array
    arrs.reduce(getSum, 0);
    function getSum(total, num) {
        return total + num
    }
    for (let x in arrs) {
            for (let y in arrs[x]) {
                if (y %2 == 0) {
                    console.log(arrs[y])
                }
            }
    }
    function display2() {
            for (let m = 0; m < size; m++) {
                for (let n = 0; n < size; n++) {
             arrs2[m] = Math.floor(Math.random() * (square_Edge3 - square_Edge1 + 1) + square_Edge1);
        }    total += `${arrs2} <br/>`
        }
    document.getElementById('showTotal').innerHTML = `${total}`
    }
