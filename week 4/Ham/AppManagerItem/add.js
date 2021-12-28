
let listProduct = ['ip12', 'nokia 10', 's10', 'ip13xx max', 'nokia 1280'];

displayAll();

function displayAll() {
    let str =  '<tr>\n' +
        '<td>Product Name</td>\n  ' +
        '<td></td>\n' +
        '<td>' + listProduct.length + 'product</td> ' +
    '</tr>';
    
    for (let i = 0; i < listProduct.length; i++) {
        str += '<tr><td>' + listProduct[i] + '</td>' +
        '<td><button onclick="showFormEdit('+ i +')">Edit</button></td>' +
        '<td><button onclick="deleteProduct('+ i +')">Delete</button></td></tr>'
    }
    
    document.getElementById('displayArea').innerHTML = str;

}

function addProduct() {
    let productName = document.getElementById('add').value;
    document.getElementById('add').value = '';
    listProduct.push(productName);
    console.log(listProduct)
    displayAll();
}

function deleteProduct(inDex) {
   listProduct.splice(inDex, 1);
   displayAll();
}

function showFormEdit(inDex) {
    let  str = '' ;
    str = '<input type="text" value=" '+ listProduct[inDex] +' " id="editProduct"><button onclick="saveProduct(' + inDex + ')">Save</button>';
    document.getElementById('edit').innerHTML = str;
}

function saveProduct(inDex) {
    listProduct[inDex] = document.getElementById('editProduct').value;
    document.getElementById('edit').innerHTML = '';
    displayAll();
}

