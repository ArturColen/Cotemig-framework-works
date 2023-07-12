var body = document.querySelector('body');

document.querySelector('#red').addEventListener('click', (e) => { 
    e.preventDefault();

    body.style.background = 'linear-gradient(#f40000, #f47968)';
});

document.querySelector('#green').addEventListener('click', (e) => { 
    e.preventDefault();

    body.style.background = 'linear-gradient(#006400, #39ff14)';
});

document.querySelector('#blue').addEventListener('click', (e) => { 
    e.preventDefault();

    body.style.background = 'linear-gradient(#00008b, #87cefa)';
});

document.querySelector('#yellow').addEventListener('click', (e) => { 
    e.preventDefault();

    body.style.background = 'linear-gradient(#ffe135, #fdfd96)';
});