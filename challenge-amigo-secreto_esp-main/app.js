// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let friends = [] 


function cleanBox(element){
    let box = document.getElementById(element);
    box.value = '';
}
function addText(element,text){
    let elementHtml = document.getElementById(element);
    elementHtml.innerHTML = text;
}



function addFriend(){     
    let addedFriend = document.getElementById('amigo').value;  

    if(addedFriend == ""){
        alert('Ingrese un nombre valido')
    }
    else{
        friends.push(addedFriend);   
        cleanBox('amigo');
        let list = document.getElementById('listaAmigos');
        list.innerHTML = "";

        for(let i=0;i<friends.length;i++){
            list.innerHTML += `<li>${friends[i]}</li>`;
        }
    }
    
}

function generateRandomNum(){
    return Math.floor(Math.random()*friends.length);
}


function secretFriend(){
    addText('listaAmigos','');
    
    let messege = `El amigo secreto es ${ friends[generateRandomNum()]}`
    
    addText('resultado',messege);
}



