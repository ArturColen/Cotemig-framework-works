document.getElementById('bmi-form').addEventListener('submit', (e) => { 
    e.preventDefault();

    let weight = parseFloat(document.querySelector('#weight').value);
    let height = parseFloat(document.querySelector('#height').value);

    let bmi = (weight / (height * height)).toFixed(2);

    let obesityLevel;

    if (bmi < 18.5) {
        obesityLevel = 'abaixo do peso';
    }
    else if (bmi < 24.9) {
        obesityLevel = 'no peso normal';
    }
    else if (bmi < 29.9) {
        obesityLevel = 'com sobrepeso';
    }
    else if (bmi < 34.9) {
        obesityLevel = 'com obesidade grau 1';
    }
    else if (bmi < 39.9) {
        obesityLevel = 'com obesidade grau 2';
    }
    else {
        obesityLevel = 'com obesidade grau 3';
    }

    let result = document.querySelector('#result');
    result.innerHTML = `Seu IMC é ${bmi} e <br> você está ${obesityLevel}.`;
    result.style.display = 'block';
});