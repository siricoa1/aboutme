import ProjectList from "./ProjectList.js";
const Project = function () {

    const projectContainer = document.createElement('div');
    projectContainer.id = 'projectContainer';
    const projectList = ProjectList;

    const projectsHeader = document.createElement('h1');
    projectsHeader.innerText = "Projects";

    projectContainer.appendChild(projectsHeader);
    
    for (var i = 0; i < projectList.length; i++){
        const projectInnerContainer = document.createElement('div');
        projectInnerContainer.className = 'projectInnerContainer';
        const projectName = document.createElement('h2');
        const projectDescription = document.createElement('p');
        const projectLink = document.createElement('a');

        projectName.className = 'projectName';
        projectName.innerText = projectList[i]["projectName"];

        projectDescription.className = 'projectDescription';
        projectDescription.innerText = projectList[i]["projectDescription"];
        
        projectLink.className = 'projectLink';
        projectLink.innerText = "Link to: "+projectList[i]["projectName"];
        projectLink.href = projectList[i]["projectLink"]

        projectInnerContainer.appendChild(projectName);
        projectInnerContainer.appendChild(projectDescription);
        projectInnerContainer.appendChild(projectLink);
        projectContainer.appendChild(projectInnerContainer);
    };

    const render = function (parentElement) {
        parentElement.innerHTML = '';
        parentElement.appendChild(projectContainer);
        document.body.offsetHeight;
    };

    return { render };
};

export default Project;
