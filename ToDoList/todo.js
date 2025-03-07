window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   let clickBtn = document.getElementById("add-btn");
   clickBtn.addEventListener("click", addBtnClick);
   addEventListener("keyup", function keyupHandler(event) {
      if (event.key == "Enter") {
         addBtnClick();
      }
   });// TODO: Complete the function
   
}

function addBtnClick() {
   let newTask = document.getElementById("new-task");
   if (newTask.value != ""){
      addTask(newTask.value);
   }   // TODO: Complete the function
   newTask.value = "";
   newTask.focus();
}

function addTask(task) {
   let listLi = document.createElement("li");
   listLi.innerHTML = ("<span class='task-text'>" + task + "</span><button class='done-btn'>&#10006;</button>");
   let orderedList = document.querySelector("ol");
   orderedList.appendChild(listLi);// TODO: Complete the function
   let doneButton = document.querySelectorAll(".done-btn");
   for (let i=0; i < doneButton.length; i++){
      doneButton[i].addEventListener("click",removeTask);
   }
}

function removeTask(event) {
   let liParent = event.target.parentNode;
   let olParent = liParent.parentNode;
   olParent.removeChild(liParent);// TODO: Complete the function
    
}