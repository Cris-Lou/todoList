/***
 * déclarations de variables
 **/ 
let addButton = document.getElementById("addButton");//récup bouton
let newTask = document.getElementById("newTask");//récup input
let tasksList = document.querySelector("#tasksList"); //récup ul
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
        let liste = document.createElement("li");// creation li
        liste.innerText = newTask.value;// association valeur de l'input à li dans le dom
        liste.classList.add = "listeItem";// attribution class à li
        tasksList.appendChild(liste);//creation de li dans ul

        // création du bouton valider la tâche
        const checkButton = document.createElement("button");//creation du bouton validé
        checkButton.innerHTML = '<i class="fas fa-check"></i>';//creation dans le dom
        checkButton.classList.add("checkButton");//ajout d'une classe
        tasksList.appendChild(checkButton);//creation du bouton dans ul

            //activation bouton valider 
            checkButton.addEventListener("click",function(){//mise sur écoute du bouton
                if (liste.style.color != "green"){
                    liste.style.color = "green";
                    liste.style.textDecoration = "line-through";
                    storage();
                }
                else {
                    liste.style.color = "black";
                    liste.style.textDecoration = "none";
                    storage();
                }    
            });


        // création du bouton modifier la tâche
        const editButton = document.createElement("button");
        editButton.innerHTML = '<i class="fas fa-pen"></i>';
        editButton.classList.add("editButton");
        tasksList.appendChild(editButton);

            //activation bouton modifier
            // editButton.addEventListener("click",function(){//mise sur écoute du bouton
            // });

        // création du bouton supprimer la tâche
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<i class="fas fa-times"></i>';
        deleteButton.classList.add("deleteButton");
        tasksList.appendChild(deleteButton);

            //activation bouton modifier
            deleteButton.addEventListener("click", function(){
            liste.remove();
            checkButton.remove();
            editButton.remove();
            deleteButton.remove();
            storage();
            });

        storage();//sauvegarde dans local storage de la li ainsi créée 
        newTask.value ="";//reinitialisation du champs de l'input
    }
    else{
        error.innerHTML = "vous devez saisir une tâche de plus de deux caractères!";//message si input invalid
    }  
});

getValues();// recuperation de la liste pré existante depuis le local storage

