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

    const greetingTextContainer = document.createElement('div');
    greetingTextContainer.id = 'greetingTextContainer';
    const greetingsTextOne = document.createElement('p');
    const greetingsTextTwo = document.createElement('p');
    greetingsTextOne.className = 'homeGreetingsText';
    greetingsTextTwo.className = 'homeGreetingsText';
    greetingsTextOne.innerText = 'Hello, my name is Andrew Sirico, and I am a software engineer specializing in web development. In a collaborative team project, I helped develop a web application that used AI-powered sentiment analysis to rate products. '+
    'I set up the development environment in Node.js/Express, designed the database model in Firebase, and built the API that leveraged the Hugging Face API for sentiment analysis. '+
    'I have expertise in Python and Java, having developed sorting algorithms and data structures in both languages during my university studies. While working with C, I gained experience compiling and running scripts in a Linux environment and implementing multi-threading techniques when applicable. '
    
    greetingsTextTwo.innerText = 'My background also includes database management with MySQL, where I learned to prototype and deploy applications using relational database structures. Additionally, I have experience with MongoDB and GraphQL, as well as professional UI development experience for Android and iOS using Java and SwiftUI respectively. '+
    'I am well-versed in version control using GitHub, have hands-on experience with Jira, and am familiar with Agile methodologies, including SCRUM. I am committed to continuous learning, collaboration, and maintaining a professional approach in my work.'

    const projectsDiv = document.createElement('div');
    projectsDiv.id = 'projectsDiv';

    homePageContainer.appendChild(homeTitle);
    homePageContainer.appendChild(homeBodyDiv);
    imageDiv.appendChild(imageContainer);
    homeBodyDiv.appendChild(greetingDiv);
    greetingDiv.appendChild(imageDiv);
    greetingDiv.appendChild(greetingTextContainer);
    greetingTextContainer.appendChild(greetingsTextOne);
    greetingTextContainer.appendChild(greetingsTextTwo);
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
