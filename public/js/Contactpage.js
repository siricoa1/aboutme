const Contactpage = function () {
    const contactPageContainer = document.createElement('div');
    contactPageContainer.id = 'contactPageContainer';

    const contactTitle = document.createElement('h1');
    contactTitle.textContent = 'Contact';

    const contactPageDiv = document.createElement('div');
    contactPageDiv.id = 'contactPageDiv';

    const contactPageEmail = document.createElement('h3');
    contactPageEmail.id = 'contactPageEmail'
    contactPageEmail.textContent = '12siricoa94@gmail.com'
    
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
    contactPageContainer.appendChild(contactPageDiv);
    contactPageDiv.appendChild(contactPageEmail);
    contactPageDiv.appendChild(contactPageLinkedInLink);
    contactPageDiv.appendChild(contactPageGitHubLink);

    const render = function (parentElement) {
        parentElement.innerHTML = '';
        parentElement.appendChild(contactPageContainer);
    };

    return { render };
};

export default Contactpage;
