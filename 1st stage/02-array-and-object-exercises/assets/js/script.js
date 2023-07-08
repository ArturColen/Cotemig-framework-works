var concatenatedArray = [];

document.querySelector('#exercise1').addEventListener('click', () => {
    let array1 = [];
    let array2 = [];

    let quantElements = parseInt(prompt('Quantos elementos você deseja inserir no primeiro array?'));

    for (let i = 0; i < quantElements; i++) {
        let num = parseInt(prompt(`Insira o ${i + 1}º número do primeiro array:`));
        array1.push(num);
    }

    numElements = parseInt(prompt("Quantos elementos você deseja inserir no segundo array?"));
    for (let i = 0; i < numElements; i++) {
        let num = parseInt(prompt(`Insira o ${i + 1}º número do segundo array:`));
        array2.push(num);
    }

    concatenatedArray = array1.concat(array2);

    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    for (let i = 0; i < concatenatedArray.length; i++) {
        if (concatenatedArray[i] < min) {
            min = concatenatedArray[i];
        }

        if (concatenatedArray[i] > max) {
            max = concatenatedArray[i];
        }
    }

    let filteredArray = concatenatedArray.filter((num) => num !== min && num !== max);

    alert(`Array 1: ${array1}`);
    alert(`Array 2: ${array2}`);
    alert(`Array concatenado: ${concatenatedArray}`);
    alert(`Array concatenado sem o maior e menor valores: ${filteredArray}`);
});

document.querySelector('#exercise2').addEventListener('click', () => {
    let numberExists = parseInt(prompt('Digite qual número você deseja saber se há no array:'));

    let result = concatenatedArray.indexOf(numberExists);

    if (result >= 0) {
        alert('O valor existe no vetor concatenado!');
    }
    else {
        alert('O valor não existe no vetor concatenado!');
    }
});

document.querySelector('#exercise3').addEventListener('click', () => {
    let array = [], doubleArray = [];

    for (let i = 0; i <= 9; i++) {
        let num = parseInt(prompt(`Insira o ${i + 1}º número do array:`));
        array.push(num);
    }

    doubleArray = array.map(double => double * 2);

    alert('Array dobrado: ' + doubleArray);
});

const products = [
    {id: 1, category: 'limpeza', name: 'Amaciante'},
    {id: 2, category: 'limpeza', name: 'Detergente'},
    {id: 3, category:'alimento', name: 'Ovo'},
    {id: 4, category:'alimento', name: 'Alface'},
];

document.querySelector('#exercise4').addEventListener('click', () => {
    const ids = products.map(product => product.id);

    alert('Os ids da lista de produtos são: ' + ids);
});

document.querySelector('#exercise5').addEventListener('click', () => {
    const filterCategory = products.filter(product => product.category == 'alimento').map(item => item.name);

    alert('Os produtos do tipo "alimento" são: ' + filterCategory);
});

document.querySelector('#exercise6').addEventListener('click', () => { 
    const foodsId = products.filter(product => product.category == 'alimento').map(item => item.id);

    alert('Os ids dos produtos da categoria alimento são: ' + foodsId);
});

document.querySelector('#exercise7').addEventListener('click', () => { 
    let discountApplied = [];
    const discountProducts = [
        {id: 1, name: 'Camisa', value: 50},
        {id: 2, name: 'Bermuda', value: 45},
        {id: 3, name:'Moletom', value: 150},
        {id: 4, name: 'Calça', value: 75},
        {id: 5, name:'Tênis', value: 200},
    ];

    discountApplied = discountProducts.map(discount => discount.value - (discount.value * 0.1));

    alert('O valor dos produtos com desconto será: ' + discountApplied);
});

document.querySelector('#exercise8').addEventListener('click', () => { 
    let wageIncrease = [];
    const employees = [
        {
            name: 'Han Solo',
            department: 'Financeiro',
            salary: 5000
        },
        {
            name: 'Luke',
            department: 'Financeiro',
            salary: 15000
        },
        {
            name: 'Ben',
            department: 'Marketing',
            salary: 2000
        },
        {
            name: 'Leia',
            department: 'Marketing',
            salary: 10000
        },
        {
            name: 'Rey',
            department: 'Financeiro',
            salary: 2500
        }
    ];

    const financialDepartment = employees.filter(employee => employee.department == 'Financeiro');
    console.log(financialDepartment);

    wageIncrease = financialDepartment.map(item => item.salary + (item.salary * 0.5));
    console.log(wageIncrease);

    const totalSalary = wageIncrease.reduce((total, increase) => total + increase);
    console.log(totalSalary);

    alert('O valor que o Departamento Financeiro irá receber ao todo se houver 50% de aumento para eles é: R$' + totalSalary.toFixed(2));
});

document.querySelector('#exercise9').addEventListener('click', () => { 
    alert('O código consiste em um função que verifica qual o maior valor dentro de cada um dos vetores inseridos como parâmetro.');
    alert('Dessa forma, o for serve para fazer a verificação dentro de cada um dos itens do array e o if serve para iterar o maior item que for encontrado.');
    alert('O resultado da execução desse código provavelmente será: 5, 27, 39, 1001');
});

document.querySelector('#exercise10').addEventListener('click', () => { 
    let array = [];
    let = count = 0;

    let quantElements = parseInt(prompt('Quantos elementos você deseja inserir no array?'));

    for (let i = 0; i < quantElements; i++) {
        let num = parseInt(prompt(`Insira o ${i + 1}º número do array:`));
        array.push(num);

        if (num * -1 > 0) {
            count++;
        }
    }

    alert('Quantidade de itens negativos: ' + count);
});