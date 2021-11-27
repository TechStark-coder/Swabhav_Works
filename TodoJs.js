// to add something 
'use strict'
document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("enter a task")
    }
    else{//adding task to perform.
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                <input type="checkbox" id="acpt" > 
                    ${document.querySelector('#newtask input').value + " " + "task added on" + " " + moment().format('LTS')}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        //deleting task from list
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        //clearing the task
        var newtask = document.querySelectorAll(".clear");
        for(var i=0; i<newtask.length;i++){
            newtask[i].onclick = function(){
                this.parentElement.remove();
            }
        }

        //strike completed funcation
        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#newtask input").value = "";
        localStorage.setItem("New Todo", JSON.stringify(newtask));
        newtask();
    }
    // localStorage['monocept.todo'] = JSON.stringify(newtask);
    // newtask = localStorage["monocept.todo"];
    // newtask = JSON.parse(localStorage['monocept.todo']);
    // console.log(newtask);
    // newtask();
    localStorage.setItem("task", "newtask");
    var task = localStorage.getItem("task");
    newtask();
}