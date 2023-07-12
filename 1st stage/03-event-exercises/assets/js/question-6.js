document.querySelector('#verify').addEventListener('click', () => { 

    let number = document.querySelector('#number').value;

    if (number == 0) {
        alert('Preencha o campo corretamente ou digite um número diferente de 0!');
    }
    else if (number < 0) {
        alert('Digite um número positivo!');
    }
    else {
        number = parseInt(number);

        if (number > 0 && number % 3 == 0 && number % 5 == 0) {
            alert(number + ' é divisível por 3 e 5 ao mesmo tempo!');
        }
        else {
            alert(number + ' não é divisível por 3 e 5 ao mesmo tempo.');
        }
    }
});