/***
 * déclarations de variables
 **/ 
let addButton = document.getElementById("addButton");//récup bouton
let newTask = document.getElementById("newTask");//récup input
let tasksList = document.querySelector("#tasksList"); //récup ul
// let liste = document.createElement("li");//implémentation li
// let liste = document.querySelector("#liste");
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
        tasksList.innerHTML +=`<li class="liste">${newTask.value}</li>`;// création contenu de chaque li
        /* <span><button id="checkButton">tâche effectuée</button></span>
            =<span><button id="editButton">modifier la tâche</button></span>
            <span><button id="deleteButton">supprimer la tâche</button></span> */
        
        // création du bouton valider la tâche
        const checkButton = document.createElement("button");
        checkButton.innerHTML = '<i class="fas fa-check"></i>';
        checkButton.classList.add("checkButton");
        tasksList.appendChild(checkButton);

        // création du bouton modifier la tâche
        const editButton = document.createElement("button");
        editButton.innerHTML = '<i class="fas fa-pen"></i>';
        editButton.classList.add("editButton");
        tasksList.appendChild(editButton);

        // création du bouton supprimer la tâche
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-times"></i>';
        deleteButton.classList.add("deleteButton");
        tasksList.appendChild(deleteButton);

        // deleteButton.addEventListener("click", function(){
        //    deleteButton.onclick = newTask.target.remove();
        //    storage();
        // });

        storage();//sauvegarde dans local storage de la li ainsi créée 
        newTask.value ="";//reinitialisation du champs de l'input
    }
    else{
        error.innerHTML = "vous devez saisir une tâche de plus de deux caractères!";//message si input invalid
    }  
});

getValues();// recuperation de la liste pré existante depuis le local storage

