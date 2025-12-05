import Project from "./project";
import Task from "./task";
import ModalController from "./modalController";
import DeleteBtn from "../res/delete-svgrepo-com.svg";

const ContentController = (() => {
    const main = document.querySelector("main");
    const projectTitle = document.createElement("h1");
    main.appendChild(projectTitle);
    const addTaskBtn = document.createElement("button");
    addTaskBtn.className = "add-task-btn";
    addTaskBtn.textContent = "Add Task";

    const tasksContent = document.createElement("div");
    tasksContent.className = "task-content";
    main.appendChild(tasksContent);
    main.appendChild(addTaskBtn);
    addTaskBtn.hidden = true;


    let activeProject = null;


    const render = (project) => {

        activeProject = project;
        main.innerHtml = "";
        tasksContent.innerHtml = "";
        projectTitle.textContent = activeProject.getName();
        addTaskBtn.hidden = false;
        addTaskBtn.addEventListener("click", () => {
            ModalController.handleNewTask();

        });

        //need to add business logic when modalController save button is clicked for Task adding.
        const tasks = project.getTaskList();
      
        tasksContent.textContent = "No tasks associated with this Project";            

        if( tasks.length > 0 )
            tasksContent.textContent = "";

        //@TODO create a card for each task with all the info provided and add 
        //a delete button.
        for( let task of tasks){
            const taskBox = document.createElement("div");
            taskBox.className = "task-box";

            const newTaskTitle = document.createElement('h2');
            newTaskTitle.textContent = task.getTitle();
            newTaskTitle.className = "task-title";

            const newTaskDesc = document.createElement('h2');
            newTaskDesc.textContent = task.getDescription();
            newTaskDesc.className = "task-desc";

            const deleteBtn = document.createElement('img');
            deleteBtn.src = DeleteBtn;
            deleteBtn.className = "icon";
            
            taskBox.appendChild(newTaskTitle);
            taskBox.appendChild(newTaskDesc);
            taskBox.appendChild(deleteBtn);
            tasksContent.appendChild(taskBox);            
        }

    }

    return {
        render,
    }
})();

export default ContentController;