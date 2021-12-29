let listProduct = ['Sony Xperia', 'Samsung Galaxy', 'Nokia 6', 'Xiaomi Redmi Note 4', 'Apple iPhone 6S', 'Xiaomi Mi 5s Plus', 'Apple iPhone 8 Plus', 'Fujitsu F-04E', 'Oppo A71']

displayAll();

function displayAll() {
    let str = `<tr> \n 
    <td> ProDuct Name </td> \n
    <td> </td> \n
    <td> ${listProduct.length} Product </td>
    </tr>`;

    for (let i = 0; i < listProduct.length; i++ ) {
        str += '<tr> <td>' + listProduct[i] + '</td>' +
        ' <td><button onclick="showFormEdit(' + i + ')">Edit</button> </td> ' +
        ' <td><button onclick="deleteProduct(' + i + ')">Delete</button></td></tr>';

    }
    document.getElementById('displayArea').innerHTML = str;
}

function addProduct() {
    let productName = document.getElementById('add').value;
    document.getElementById('add').value = '';
    listProduct.push(productName);
    // console.log(listProduct);
    displayAll();
}

function deleteProduct(index) {
    listProduct.splice(index, 1);
    displayAll();
}

function showFormEdit(index) {
    let str = '';
    str = '<input type="text" value=" '+ listProduct[index] +' " id="editProduct"> <button onclick="saveProduct(' + index + ')">Save</button>';
    document.getElementById('edit').innerHTML = str;
}

function saveProduct(index) {
    listProduct[index] = document.getElementById('editProduct').value;
    document.getElementById('edit').innerHTML = '';
    displayAll();
}
