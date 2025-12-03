import ProjectController from "./projectController";
import ModalController from "./modalController";
import honeyDewIcon from "../res/honeydew.svg";
import addIconSvg from "../res/todo-add-svgrepo-com.svg";
import delIconSvg from "../res/delete-svgrepo-com.svg"
import StorageController from "./storageController";
const SidebarController = ( () => {

    const sidebar = document.querySelector('aside');
    const body = document.querySelector('body');
    const addTask = document.querySelector('.add-nav');


    const render = () => {
        sidebar.textContent = "";
        
        const header = document.createElement("header");

        const icon = document.createElement("img");
        icon.src = honeyDewIcon;
        icon.className = "honey-dew-icon";

        const title = document.createElement("h1");
        title.textContent = "2Dew";

        header.appendChild(icon);
        header.appendChild(title);

        const nav = document.createElement("nav");
        const addNav = document.createElement("div");
        addNav.className = "add-nav";

        const addIcon = document.createElement("img");
        addIcon.src = addIconSvg;
        addIcon.id = 'add-icon';
        addIcon.className = "icon";

        const addTaskH1 = document.createElement("h1");
        addTaskH1.textContent = "Add Task";
        addNav.appendChild(addTaskH1);
        addNav.appendChild(addIcon);
     

        nav.appendChild(addNav);

        sidebar.appendChild(header);
        sidebar.appendChild(nav);

        addIcon.addEventListener("click", () => {
            ModalController.handleNewTask();

        })

        const myProjectsHeader = document.createElement("div");
        myProjectsHeader.className = "nav-header"

        const projecth1 = document.createElement("h1");
        projecth1.textContent = "My Projects";

        const addIcon2 = document.createElement("img");
        addIcon2.src = addIconSvg;
        addIcon2.className ='icon';

        myProjectsHeader.appendChild(projecth1);
        myProjectsHeader.appendChild(addIcon2);
        addIcon2.addEventListener("click", () => {
            ModalController.handleNewProject();
        })


        myProjectsHeader.id = "newProject";


        nav.appendChild(myProjectsHeader);

        //Create Project items 
        const projects = ProjectController.getProjects();
        for ( let project of projects) {
            const projectItem = document.createElement("div");
            const projectTitle = document.createElement("h1");
            const deleteButton = document.createElement("img");
            deleteButton.src = delIconSvg;
            deleteButton.className = "icon";

            deleteButton.addEventListener( "click" , () => {
                ProjectController.deleteProject(project.getId());
                render();
                StorageController.storeProjects();


            });


            projectTitle.textContent = project.name;
            projectTitle.dataset.id = project.getId();

            projectItem.appendChild(projectTitle);
            nav.appendChild(projectItem);
            nav.appendChild(deleteButton);

   
        }
    }


    return { 
        render,
    };
    

})();

export default SidebarController;