let sendBtn = document.querySelectorAll('#btns button')[0];
let deleteBtn = document.querySelectorAll('#btns button')[1];
let editBtn = document.querySelectorAll('#btns button')[2];
let productName = document.querySelectorAll('#wrap input')[0];
let quantity = document.querySelectorAll('#wrap input')[1];
let price = document.querySelectorAll('#wrap input')[2];
let shelf = document.querySelectorAll('#wrap input')[3];
let description = document.querySelectorAll('#wrap input')[4];
let category = document.querySelectorAll('#wrap input')[5];
let table = document.querySelector('#output table');
let DB = [];

sendBtn.onclick = function () {
    if (productName.value.trim() === '' || quantity.value.trim() === '' || price.value.trim() === '' || shelf.value.trim() === '' || description.value.trim() === '' || category.value.trim() === '') {
        alert('Preencha todos os campos corretamente!');
    }
    else {
        let product = new Object();
        
        product.productName = productName.value;
        product.quantity = quantity.value;
        product.price = price.value;
        product.shelf = shelf.value;
        product.description = description.value;
        product.category = category.value;
        
        product.id = DB.length;
        
        DB.push(product);
        table.innerHTML += `<tr><td><input type="checkbox" id="${product.id}" onchange="verify(this.id)"></td><td>${product.productName}</td><td>${product.quantity}</td><td>${product.price}</td><td>${product.shelf}</td><td>${product.description}</td><td>${product.category}</td></tr>`;
    }
}

deleteBtn.onclick = function() {
    for (let i = 0; i < DB.length; i++) {
        let element = document.querySelectorAll('#output table tr td input')[i];

        if (element.checked) {
            DB.splice(element.id, 1);
            table.innerHTML = `<tr><td width="30px"></td><td>Nome</td><td>Quant.</td><td>Preço</td><td>Prateleira</td><td>Descrição</td><td>Categoria</td></tr>`;
            setUpTable();
        }
    }
}

function setUpTable() {
    for (let i = 0; i < DB.length; i++) {
        table.innerHTML += `<tr><td width="30px"><input type="checkbox" id="${i}" onchange="verify()"></td><td>${DB[i].productName}</td><td>${DB[i].quantity}</td><td>${DB[i].price}</td><td>${DB[i].shelf}</td><td>${DB[i].description}</td><td>${DB[i].category}</td></tr>`;
    }
}

editBtn.onclick = function() {
    for (let i = 0; i < DB.length; i++) {
        let element = document.querySelectorAll('#output table tr td input')[i];

        if (element.checked) {
            DB[i].productName = productName.value;
            DB[i].quantity = quantity.value;
            DB[i].price = price.value;

            DB[i].shelf = shelf.value;
            DB[i].description = description.value;
            DB[i].category = category.value;

            table.innerHTML = `<tr><td width="30px"></td><td>Nome</td><td>Quant.</td><td>Preço</td><td>Prateleira</td><td>Descrição</td><td>Categoria</td></tr>`;
            setUpTable();
        }
    }    
}

function verify(id) {
    let count = 0;
    for (let i = 0; i < DB.length; i++) {
        let element = document.querySelectorAll('#output table tr td input')[i];
        if (element.checked) {
            productName.value = DB[i].productName;
            quantity.value = DB[i].quantity;
            price.value = DB[i].price;
            shelf.value = DB[i].shelf;
            description.value = DB[i].description;
            category.value = DB[i].category;

            count++;

            if (count > 1) {
                alert('Não é possível selecionar mais de 1 elemento.');
                element.checked = false;
                break;
            }
        }
    }
}