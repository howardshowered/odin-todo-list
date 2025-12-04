import Project from "./project";
import Task from "./task";
import ModalController from "./modalController";
const ContentController = (() => {
    const main = document.querySelector("main");
    const projectTitle = document.createElement("h1");
    main.appendChild(projectTitle);
    const addTaskBtn = document.createElement("button");
    addTaskBtn.className = "add-task-btn";
    addTaskBtn.textContent = "Add Task";

    const tasksContent = document.createElement("div");
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
            const newTask = document.createElement('h2');
            newTask.textContent = task.getTitle();
            tasksContent.appendChild(newTask);            
        }

    }

    return {
        render,
    }
})();

export default ContentController;