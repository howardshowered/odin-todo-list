import Project from "./project";
import ModalController from "./modalController";
const ContentController = (() => {
    const main = document.querySelector("main");
    const projectTitle = document.createElement("h1");
    main.appendChild(projectTitle);
    const addTaskBtn = document.createElement("button");
    addTaskBtn.className = "add-task-btn";
    addTaskBtn.textContent = "Add Task";

    const tasksContent = document.createElement("h2");
    main.appendChild(tasksContent);
        main.appendChild(addTaskBtn);
    addTaskBtn.hidden = true;


    let activeProject = null;


    const render = (project) => {

        activeProject = project;
        main.innerHtml = "";
        projectTitle.textContent = activeProject.getName();
        addTaskBtn.hidden = false;
        addTaskBtn.addEventListener("click", () => {
            ModalController.handleNewTask();

        });

        //need to add business logic when modalController save button is clicked for Task adding.
        const tasks = project.getTaskList();
        if( tasks.length === 0)
            tasksContent.textContent = "No tasks associated with this Project";



    }

    return {
        render,
    }
})();

export default ContentController;