document.querySelector('#show-phrase').addEventListener('click', (e) => { 
    e.preventDefault();

    var text = document.getElementById('text');

    if (text.style.display == 'none') {
        text.style.display = 'block';
    }
    else {
        text.style.display = 'none';
    }
});