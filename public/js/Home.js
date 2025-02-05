import Project from "./Project.js";

const Home = function () {
    const homePageContainer = document.createElement('div');
    homePageContainer.id = 'homePageContainer';

    const homeTitle = document.createElement('h1');
    homeTitle.textContent = 'Welcome';
    homeTitle.id = 'homeTitle'

    const homeBodyDiv = document.createElement('div');
    homeBodyDiv.id = 'homeBodyDiv';

    const greetingDiv = document.createElement('div');
    greetingDiv.className = 'homeBodyInnerDiv';

    const imageContainer = document.createElement('img');
    imageContainer.id = 'homeImageContainer';
    imageContainer.src = '../images/IMG_4179.JPG'

    const imageDiv = document.createElement('div');
    imageDiv.id = 'homeImgDiv';

    const greetingsText = document.createElement('p');
    greetingsText.id = 'homeGreetingsText';
    greetingsText.innerText = 'Hi, my name is Andrew Sirico and I am a software engineer specializing in web development. '+ 
    'I have experience writing programs and scripts in Python, Java, and C. Furthermore, my experience extends to SwiftUI, '+
    'Android Development, and using AWS EC2 instances. I am proficient in database management with SQL, MongoDB, Firebase, and GraphQL.'+
    ' Additionally, I am comfortable with using Github, have experience with Jira, and I am familiar with SCRUM methodologies. '+
    'I pride myself on being sociable, professional, and empathetic, always striving for self-awareness and humility.'

    const projectsDiv = document.createElement('div');

    homePageContainer.appendChild(homeTitle);
    homePageContainer.appendChild(homeBodyDiv);
    imageDiv.appendChild(imageContainer);
    homeBodyDiv.appendChild(greetingDiv);
    greetingDiv.appendChild(imageDiv);
    greetingDiv.appendChild(greetingsText);
    homePageContainer.appendChild(projectsDiv)
    const project = Project()
    project.render(projectsDiv);
    const render = function (parentElement) {
        parentElement.innerHTML = '';
        parentElement.appendChild(homePageContainer);
    };

    return { render };
};

export default Home;
