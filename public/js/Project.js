import ProjectList from "./ProjectList.js";
const Project = function () {

    const projectContainer = document.createElement('div');
    const projectList = ProjectList;
    
    for (var i = 0; i < projectList.length; i++){
        const projectName = document.createElement('h1');
        const projectDescription = document.createElement('p');
        const projectLink = document.createElement('a');

        projectName.className = 'projectName';
        projectName.innerText = projectList[i]["projectName"];

        projectDescription.className = 'porjectDescription';
        projectDescription.innerText = projectList[i]["projectDescription"];
        
        projectLink.className = 'projectLink';
        projectLink.innerText = "Link to: "+projectList[i]["projectName"];
        projectLink.href = projectList[i]["projectLink"]

        projectContainer.appendChild(projectName);
        projectContainer.appendChild(projectDescription);
        projectContainer.appendChild(projectLink);
        
    };

    const render = function (parentElement) {
        parentElement.innerHTML = '';
        parentElement.appendChild(projectContainer);
    };

    return { render };
};

export default Project;
