const Nav = function (switchToHome, switchToContact) {
    const navContainer = document.createElement('nav');
    navContainer.id = 'nav';

    const navFlexDiv = document.createElement('div');
    navFlexDiv.id = 'navFlexDiv'

    const homeButton = document.createElement('button');
    homeButton.textContent = 'Homepage';
    homeButton.className = 'navButton';

    const contactButton = document.createElement('button');
    contactButton.textContent = 'Contact';
    contactButton.className = 'navButton';

    navContainer.appendChild(navFlexDiv);
    navFlexDiv.appendChild(homeButton);
    navFlexDiv.appendChild(contactButton);

    const attachListeners = function () {
        homeButton.addEventListener('click', switchToHome);
        contactButton.addEventListener('click', switchToContact);
    };

    const render = function (parentElement) {
        parentElement.appendChild(navContainer);
        attachListeners();
    };

    return { render };
};

export default Nav;
