import ProjectController from "./modules/projectController.js";
import SidebarController from "./modules/sidebarController.js"
import "./styles.css";
import StorageController from "./modules/storageController.js";


document.addEventListener( 'DOMContentLoaded', function() {
    window.ProjectController = ProjectController;
    window.SidebarController = SidebarController;
    StorageController.restoreProjects();
    console.log(ProjectController.getProjects());
    SidebarController.render();

});
