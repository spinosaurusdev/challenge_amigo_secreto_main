// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// variable for keeping friends names
let friendsList = [];

//CLEAN INPUT FIELD
function cleanUpInput() {
    document.querySelector('#amigo').value = '';
}

function cleanFriendList() {
    friendsList = [];
    listingFriends();    
}


// ADD FRIENDS TO THE LIST
function agregarAmigo() {
    let addFriend = document.getElementById('amigo').value;

    if (friendsList.some(friend => friend.toLowerCase() === addFriend.toLowerCase())) {
        alert('Este amigo ya está en la lista');
    } else if (addFriend === '') {
        alert('Por favor, ingrese un nombre de amigo');
    } else {    
        if (!friendsList.includes(addFriend) && addFriend !== '') {
            friendsList.push(addFriend);
            listingFriends();  // UPDATES THE LIST AFTER ADDING A FRIEND
        }
    }

  cleanUpInput();
}

function listingFriends() {
    const list = document.getElementById('listaAmigos');
    list.innerHTML = '';//CLEAN THE LIST BEFORE ADDING FRIENDS
    friendsList.forEach(friend => {
        let li = document.createElement('li');
        li.textContent = friend;
        list.appendChild(li);
    });
}

// FUNCTION TO DRAW A FRIEND
function sortearAmigo() {
    let chosenFriend = document.getElementById('resultado');
    chosenFriend.innerHTML = '';

    if (friendsList.length === 0) {
        alert('No hay amigos en la lista para sortear');
        return;
    }

    let randomIndex = Math.floor(Math.random() * friendsList.length);
    let selectedFriend = friendsList[randomIndex];
    // alert(`El amigo secreto seleccionado es: ${selectedFriend}`);
    let li = document.createElement('li');
    li.textContent = selectedFriend;
    chosenFriend.appendChild(li);
    cleanFriendList();
}