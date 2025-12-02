
import ProjectController from "./projectController";
 
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
        
    }


})();