window.addEventListener('load', start);

var food = null;
var globalFoods = [];
var id = 0;

function start() {
    food = document.querySelector('#food');
    submit();
    input();
}

function submit() {
    var form = document.querySelector('form');
    form.addEventListener('submit', register);

    function register(e) {
        e.preventDefault();
    }
}

function input() {
    food.focus();
    food.addEventListener('keyup', write);

    function write(e) {
        if (e.key == 'Enter' && food.value != ' ') {
            insertName(e.target.value);
        }
    }

    function insertName(newFood) {
        globalFoods.push(newFood);
        add(newFood);
    }

    function add(newFood) {
        var day = document.querySelector('#day').value;
        var table = null;
        var row = "<li id='id" + id + "'> <img src='../images/exc.png' onclick='exclude(" + id + ")' class='delete'> " + newFood + "<img src='../images/edit.png' onclick='edit(" + id + ")' class='edit'></li>";
        id++;

        switch (day) {
            case 'monday':
                table = document.getElementById('monday');
                table.innerHTML += row;
                break;
            case 'tuesday':
                table = document.getElementById('tuesday');
                table.innerHTML += row;
                break;
            case 'wednesday':
                table = document.getElementById('wednesday');
                table.innerHTML += row;
                break;
            case 'thursday':
                table = document.getElementById('thursday');
                table.innerHTML += row;
                break;
            case 'friday':
                table = document.getElementById('friday');
                table.innerHTML += row;
                break;
            case 'saturday':
                table = document.getElementById('saturday');
                table.innerHTML += row;
                break;
            case 'sunday':
                table = document.getElementById('sunday');
                table.innerHTML += row;
                break;
        }
    }
}

function exclude(index) {
    id = 'id' + index;
    document.getElementById(id).style.display = 'none';
    var idx = index;
    globalFoods.splice(idx, 1);
}

function edit(index) {
    document.querySelector('#edit-div').style.display = 'block';
    var edited = document.querySelector('#edited');
    edited.addEventListener('keyup', edited);

    function edited(e) {
        if (e.key == 'Enter' && edited.value != ' ') {
            updateName(e.target.value, index);
        }
    }

    function updateName(update, index) {
        finalIndex = '#id' + index;
        divEdit = document.querySelector('#edit-div').style.display = 'none';

        var changeRow = document.querySelectorAll(finalIndex)[0];
        var row2 = "<li id='id" + index + "'> <img src='../images/exc.png' onclick='exclude(" + index + ")' class='delete'> " + update + "<img src='../images/edit.png' onclick='edit(" + index + ")' class='edit'></li>";
        changeRow.innerHTML = row2;
    }
}