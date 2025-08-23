let addButton = document.getElementById("addButton");

addButton.onclick = ()=>{addTask()}

function addTask() {

    let inputData = document.getElementById("inputData");

    if(inputData.value != null && inputData.value == ""){
        return;
    } 

    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");



    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let checkboxContainer =  document.createElement("div");
    checkboxContainer.appendChild(checkbox);

    checkbox.onclick = function () {
        todoParagrapg.classList.toggle("done", checkbox.checked);
    };


    let todoParagrapg = document.createElement("p");
    todoParagrapg.innerText = inputData.value;


    let deleteBtn = document.createElement("i");
    deleteBtn.classList.add("fa-solid", "fa-trash", "delete-btn");

    deleteBtn.onclick = function () {
    taskDiv.remove();
    };

    taskDiv.classList.add("todo-row-style")

    checkbox.classList.add("todo-input-style");
    checkboxContainer.classList.add("todo-div-style");
    todoParagrapg.classList.add("todo-data-p-style");
    deleteBtn.classList.add("todo-data-i-style");

    taskDiv.appendChild(checkboxContainer);
    taskDiv.appendChild(todoParagrapg);
    taskDiv.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(taskDiv);

    inputData.value = "";
};



