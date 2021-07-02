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
let error = document.getElementById("error");//recup message invalidité input

/***
 * déclarations de fonctions
 **/ 

// fonction enregistrement dans le local storage
function storage(){
    window.localStorage.todoList = tasksList.innerHTML;//intitulé + enregistrement de la liste dans le local storage
};

// fonction récupération des données du local storage
function getValues(){
    storageContent = window.localStorage.todoList;//variable contenant la liste
    if(!storageContent){
        alert("Allons y, créons ensemble votre todoList !");
    }
    else {
        tasksList.innerHTML = storageContent;//récupération de la liste dans le html depuis le local storage
    }
}

/***
 * déroulement du code
 **/ 
//ajouter une tâche
addButton.addEventListener("click", function(e){//mise sur écoute de addButton
    e.preventDefault();
    if (newTask.validity.valid){//vérification de validité de l'input
        tasksList.innerHTML +=`<li class="liste">${newTask.value}<span><button id="deleteButton">supprimer</button></span></li>`;// création contenu de chaque li
        storage();//sauvegarde dans local storage de la li ainsi créée 
        newTask.value ="";//reinitialisation du champs de l'input
    }
    else{
        error.innerHTML = "vous devez saisir une tâche de plus de deux caractères!";//message si input invalid
    }  
});


// effacer une tâche à résoudre en rendant accessible deleteButton depuis HTML
// deleteButton.addEventListener("click", function(e){
//     e.preventDefault();
//     deleteButton.onclick = e.target.remove();
//     storage();
// });

getValues();// recuperation de la liste pré existante depuis le local storage