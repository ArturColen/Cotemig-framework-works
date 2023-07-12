function changeBackgroundColor(selectElement) {
    var selectedColor = selectElement.value;

    switch (selectedColor) {
        case 'red':
            document.body.style.background = 'linear-gradient(#f40000, #f47968)';
            break;
        case 'green':
            document.body.style.background = 'linear-gradient(#006400, #39ff14)';
            break;
        case 'blue':
            document.body.style.background = 'linear-gradient(#00008b, #87cefa)';
            break;
        case 'yellow':
            document.body.style.background = 'linear-gradient(#ffe135, #fdfd96)';
            break;
        default:
            document.body.style.background = 'linear-gradient(#141e30, #243b55)';
            break;
    }
}