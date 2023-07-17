var spanName = document.querySelector('#meme-name');
var image = document.querySelector('#meme-image');
var spanText = document.querySelector('#text');
var generateButton = document.querySelector('#generate-button');

generateButton.addEventListener('click', () => {
    fetch('https://api.imgflip.com/get_memes')
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            var memes = result.data.memes;
            var randomMeme = memes[Math.floor(Math.random() * memes.length)];
      
            spanName.textContent = randomMeme.name;
      
            image.innerHTML = '<img src="' + randomMeme.url + '" alt="Imagem do meme">';
        })
        .catch((error) => {
            console.log('Erro na requisição:', error);
        });
    
    fetch('https://api.quotable.io/random')
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            var quote = result.content;
            spanText.textContent = quote;
        })
        .catch((error) => {
            console.log('Erro na requisição', error);
        });
});