document.querySelector('#calculate-btn').addEventListener('click', () => {
    let number1 = document.querySelector('#number1').value;
    let number2 = document.querySelector('#number2').value;


    if (number1 == '' || number2 == '') {
        alert('Preencha os campos corretamente!');
    }
    else {
        let result = parseInt(number1) + parseInt(number2);

        alert(number1 + ' + ' + number2 + ' = ' + result);
    }
});