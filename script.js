/***
 * déclarations de variables
 **/ 
let addButton = document.getElementById("addButton");//récup bouton
let newTask = document.getElementById("newTask");//récup input
let tasksList = document.querySelector("#tasksList"); //récup ul
// let liste = document.createElement("li");//implémentation li
// let liste = document.querySelector("#liste");
let deleteButton; //recup delete button
let storageContent;//valeur du local storage

/***
 * déclarations de fonctions
 **/ 
// fonction controle champs input vide à résoudre
// function checkSubmit(){
//         if (newTask.value === ""){
//             alert("Vous devez écrire quelque chose");
//             return "false";
//             }
//         else{
//             return "true";
//         }
//     }

// fonction enregistrement dans le local storage
function storage(){
    window.localStorage.todoList = tasksList.innerHTML;
};

// fonction récupération des données du local storage
function getValues(){
    storageContent = window.localStorage.todoList;
    if(!storageContent){
        alert("Allons y, créons ensemble votre todoList !");
    }
    else {
        tasksList.innerHTML = storageContent;
    }
}

/***
 * déroulement du code
 **/ 

//ajouter une tâche
addButton.addEventListener("click", function(e){//mise sur écoute de addButton
    e.preventDefault();
    tasksList.innerHTML +=`<li class="liste">${newTask.value}<span><button id="deleteButton">supprimer</button></span></li>`;// création contenu de chaque li
    newTask.value ="";//reinitialisation du champs de l'input
    storage();//sauvegarde dans local storage de la li ainsi créée 
});


// effacer une tâche à résoudre en rendant accessible deleteButton depuis HTML
// deleteButton.addEventListener("click", function(e){
//     e.preventDefault();
//     deleteButton.onclick = e.target.remove();
//     storage();
// });

getValues();