document.querySelector('#exercise1').addEventListener('click', () => {
    let option = prompt('Deseja começar o exercício 1? (S/N)');

    while (option != null && option.toLowerCase() == 's') {
        let name = prompt('Digite seu nome:');

        if (name == '') {
            alert('Digite seu nome!');
            continue;
        }
        
        let salary = parseFloat(prompt('Digite seu salário atual!', '0'));

        if (salary == 0) {
            alert('Digite seu salário atual!');
            continue;
        }

        let newSalary = (salary + (salary * 0.1)).toFixed(2);
        alert(`${name}, seu novo salário é R$${newSalary}`);
        option = prompt('Deseja recomeçar o exercício 1? (S/N)');
    } 
});

document.querySelector('#exercise2').addEventListener('click', () => {
    let option = prompt('Deseja começar o exercício 2? (S/N)');

    while (option != null && option.toLowerCase() == 's'){
        let firstValue = parseInt(prompt('Digite o primeiro valor:', '0'));

        if (firstValue == 0) {
            alert('Digite o primeiro valor corretamente!');
            continue;
        }

        let secondValue = parseInt(prompt('Digite o segundo valor:', '0'));

        if (secondValue == 0){
            alert('Digite o segundo valor corretamente!');
            continue;
        }

        if (firstValue == secondValue) {
            let result = firstValue + secondValue;
            alert(`A soma dos valores é ${result}`);
        }
        else {
            let result = firstValue * secondValue;
            alert(`O produto dos valores é ${result}`);
        }

        option = prompt('Deseja recomeçar o exercício 2? (S/N)');
    }
});

document.querySelector('#exercise3').addEventListener('click', () => {
    let option = prompt('Deseja começar o exercício 3? (S/N)');

    while (option != null && option.toLowerCase() == 's') {
        let productValue = parseFloat(prompt('Digite o valor do produto que irá comprar:', '0'));

        if (productValue == 0) {
            alert('Digite o valor do produto corretamente!');
            continue;
        }

        let parceling = parseInt(prompt('Digite a quantidade de parcelas a serem pagas (sendo permitidas somente 3 ou 5 parcelas):', '0'));
        
        if (parceling == 0) {
            alert('Digite uma quantidade de parcelas válida!');
            continue;
        }
        else if (parceling != 3 && parceling != 5) {
            alert('Digite uma quantidade de parcelas válida!');
            continue;
        }
        else if (parceling == 3) {
            productValue = (productValue + (productValue * 0.1)).toFixed(2);
            let parcelingValue = (productValue / parceling).toFixed(2);
            alert(`O valor final do produto é R${productValue}, sendo que cada parcela custa R${parcelingValue}.`);
        }
        else if (parceling == 5) {
            productValue = (productValue + (productValue * 0.2)).toFixed(2);
            let parcelingValue = (productValue / parceling).toFixed(2);
            alert(`O valor final do produto é R${productValue}, sendo que cada parcela custa R${parcelingValue}.`);
        }

        option = prompt('Deseja recomeçar o exercício 3? (S/N)');
    }
});

document.querySelector('#exercise4').addEventListener('click', () => {
    let option = prompt('Deseja começar o exercício 4? (S/N)');

    while (option != null && option.toLowerCase() == 's') {
        let name = prompt('Digite seu nome:');

        if (name == '') {
            alert('Digite seu nome!');
            continue;
        }

        let grade1 = parseFloat(prompt('Digite a primeira nota:', '0'));

        if (grade1 == 0) {
            alert('Digite uma nota válida!');
            continue;
        }

        let grade2 = parseFloat(prompt('Digite a segunda nota:', '0'));

        if (grade2 == 0) {
            alert('Digite uma nota válida!');
            continue;
        }

        let grade3 = parseFloat(prompt('Digite a terceira nota:', '0'));

        if (grade3 == 0) {
            alert('Digite uma nota válida!');
            continue;
        }

        let average = ((grade1 + grade2 + grade3) / 3).toFixed(2);

        if (average < 7) {
            alert(`${name}, a média das suas notas é ${average}. Você não foi aprovado.`);
        }
        else {
            alert(`${name}, a média das suas notas é ${average}. Você foi aprovado.`);
        }

        option = prompt('Deseja recomeçar o exercício 3? (S/N)');
    }
});

document.querySelector('#exercise5').addEventListener('click', () => {
    let option = prompt('Deseja começar o exercício 5? (S/N)');

    while (option != null && option.toLowerCase() == 's') {
        let month = parseInt(prompt('Digite o número do mês desejado (1 a 12):'));

        if (month < 1 || month > 12) {
            alert('Digite o número de um mês válido!');
            continue;
        }

        switch (month) {
            case 1:
                alert(`${month} - Janeiro`);
                break;
            case 2:
                alert(`${month} - Fevereiro`);
                break;
            case 3:
                alert(`${month} - Março`);
                break;
            case 4:
                alert(`${month} - Abril`);
                break;
            case 5:
                alert(`${month} - Maio`);
                break;
            case 6:
                alert(`${month} - Junho`);
                break;
            case 7:
                alert(`${month} - Julho`);
                break;
            case 8:
                alert(`${month} - Agosto`);
                break;
            case 9:
                alert(`${month} - Setembro`);
                break;
            case 10:
                alert(`${month} - Outubro`);
                break;
            case 11:
                alert(`${month} - Novembro`);
                break;
            case 12:
                alert(`${month} - Dezembro`);
                break;
        }

        option = prompt('Deseja recomeçar o exercício 4? (S/N)');
    }
});