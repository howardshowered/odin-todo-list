import ProjectController from "./projectController";
const SidebarController = ( () => {

    const sidebar = document.createElement('aside');
    const body = document.querySelector('body');
    const addTask = document.querySelector('.add-nav');


    const render = () => {
        sidebar.textContent = "";
        
        const header = document.createElement("header");

        const icon = document.createElement("img");
        icon.src = "./res/honeydew.svg";
        icon.className = "honey-dew-icon";

        const title = document.createElement("h1");
        title.textContent = "2Dew";

        header.appendChild(icon);
        header.appendChild(title);

        const nav = document.querySelector("nav");
        const addNav = document.createElement("div");
        addNav.className = "add-nav";

        const addIcon = document.createElement("img");
        addIcon.src = "../res/todo-add-svgrepo-com.svg";
        addIcon.className = "add-icon";
        const addTaskH1 = document.createElement("h1");
        addTaskH1.textContent = "Add Task";
        addNav.appendChild(addIcon);
        addNav.appendChild(addTaskH1);

        nav.appendChild(addNav);

        sidebar.appendChild(header);
        sidebar.appendChild(nav);

        body.appendChild(sidebar);


        //Create Project items 
        const projects = ProjectController.getProjects();
        // for ( let project of projects) {
            
        // }
    }


    return { render,


    };




    


    

})();

export default SidebarController;