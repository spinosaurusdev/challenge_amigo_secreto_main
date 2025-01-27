// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// variable for keeping friends names
let friendsList = [];

//clean input field
function cleanUpInput() {
    document.querySelector('#amigo').value = '';
}

// function for adding friends
function agregarAmigo() {
    let addFriend = document.getElementById('amigo').value;

    if (friendsList.includes(addFriend)) {
        alert('Este amigo ya está en la lista');  
    } else if (addFriend === '') {
        alert('Por favor, ingrese un nombre de amigo');
    } else {        
        friendsList.push(addFriend);
      console.log(friendsList);
    }
  
  cleanUpInput();
}

