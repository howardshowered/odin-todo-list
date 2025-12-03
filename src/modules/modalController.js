
import ProjectController from "./projectController";
import StorageController from "./storageController";
const ModalController = ( () => {

    const dialog = document.createElement("dialog");

    document.querySelector("body").appendChild(dialog);

    const handleNewProject = () => {
        dialog.innerHTML = ``; //reset dialog

        const dialogDiv = document.createElement("div");
        dialogDiv.className = "new-project";

        const title = document.createElement("div");
        title.textContent = "New Project";
        const input = document.createElement("input");
        input.setAttribute("required", "");
        const saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";

        const cancelBtn = document.createElement("button");
        cancelBtn.textContent = "Cancel";

        cancelBtn.addEventListener("click", () => {
            dialog.close();
        })

        const actionDiv = document.createElement("div");
        actionDiv.appendChild(saveBtn);
        actionDiv.appendChild(cancelBtn);

        dialogDiv.appendChild(title);
        dialogDiv.appendChild(input);
        dialogDiv.appendChild(actionDiv);
        dialog.appendChild(dialogDiv);
        
        dialog.showModal();

        saveBtn.addEventListener( 'click', () => {
            if(!input.checkValidity) {
                input.reportValidity();
                return;
            }
            ProjectController.addProject(input.value);
            dialog.close();
            StorageController.storeProjects();
            SidebarController.render();
        });
        

    };

    const handleNewTask = () => {
        dialog.innerHTML = ``;

        const dialogDiv = document.createElement("div");
        dialogDiv.className = "new-task";

        const title = document.createElement("div");
        title.textContent = "New Task";
        const titleInput = document.createElement("input");
        titleInput.setAttribute("required", "");
        titleInput.setAttribute("placeholder", "Title" );

        const descInput = document.createElement("input");
        descInput.setAttribute("required", "");
        descInput.setAttribute("placeholder", "Description");

        const dueDateInput = document.createElement("input");
        dueDateInput.setAttribute("required", "");
        dueDateInput.type = "date";
        const today = new Date().toISOString().split("T")[0];
        console.log(today);
        dueDateInput.min = today;

        const projects = ProjectController.getProjects();

        const projectSelector = document.createElement("select");
        projectSelector.id = "project-selector";
        projectSelector.name = "project-selector";

        projects.forEach( (project) => {
            const optionElement = document.createElement("option");
            optionElement.value = project.getId();
            optionElement.textContent = project.getName();
            projectSelector.appendChild(optionElement);
        });


        const saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";

        saveBtn.addEventListener( "click", () => {

        });
        const cancelBtn = document.createElement("button");
        cancelBtn.textContent = "Cancel";

        cancelBtn.addEventListener("click", () => {
            dialog.close();
        })

        const actionDiv = document.createElement("div");
        actionDiv.appendChild(saveBtn);
        actionDiv.appendChild(cancelBtn);

        dialogDiv.appendChild(title);
        dialogDiv.appendChild(titleInput);
        dialogDiv.appendChild(descInput);
        dialogDiv.appendChild(dueDateInput);
        dialogDiv.appendChild(projectSelector);
        dialogDiv.appendChild(actionDiv);

        dialog.appendChild(dialogDiv);
        dialog.showModal();
        
    }

    return { 
        handleNewProject,
        handleNewTask

    }


})();

export default ModalController;