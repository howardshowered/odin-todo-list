const ContentController = (() => {
    const main = document.querySelector("main");
    let activeProject = null;


    const render = (project) => {

        activeProject = project;
        main.innerHtml = "";
        

    }

    return {
        render,
    }
})();