import Email from './Email.js';

const Contactpage = function () {
    const contactPageContainer = document.createElement('div');
    contactPageContainer.id = 'contactPageContainer';

    const contactTitle = document.createElement('h1');
    contactTitle.textContent = 'Contact';

    const contactText = document.createElement('p');
    contactText.innerText = 'Below are links to my GitHub and LinkedIn page. You can also contact me directly through email on the form below.'

    const contactPageDiv = document.createElement('div');
    contactPageDiv.id = 'contactPageDiv';
    
    const contactPageLinkedInLink = document.createElement('a');
    const linkedInLogo = document.createElement('img');
    linkedInLogo.src = '../images/LI-In-Bug.png';
    linkedInLogo.id = 'linkedInLogo';
    contactPageLinkedInLink.appendChild(linkedInLogo);
    contactPageLinkedInLink.href = 'https://www.linkedin.com/in/andrew-sirico-24611a342/'
    
    const contactPageGitHubLink = document.createElement('a');
    contactPageGitHubLink.href = 'https://github.com/siricoa1';
    const gitHubLogo = document.createElement('img');
    gitHubLogo.src = '../images/github-mark.png'
    gitHubLogo.id = 'gitHubLogo';
    contactPageGitHubLink.appendChild(gitHubLogo);

    contactPageContainer.appendChild(contactTitle);
    contactPageContainer.appendChild(contactText);
    contactPageContainer.appendChild(contactPageDiv);
    contactPageDiv.appendChild(contactPageLinkedInLink);
    contactPageDiv.appendChild(contactPageGitHubLink);

    const email = Email();
    const emailDiv = document.createElement('div');
    contactPageContainer.appendChild(emailDiv);
    email.render(emailDiv);

    const render = function (parentElement) {
        parentElement.innerHTML = '';
        parentElement.appendChild(contactPageContainer);
    };

    return { render };
};

export default Contactpage;
