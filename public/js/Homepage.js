const Homepage = function (switchToContact) {
    const homePageContainer = document.createElement('div');
    homePageContainer.id = 'homePageContainer';

    const homeTitle = document.createElement('h1');
    homeTitle.textContent = 'Welcome Home';

    const switchButton = document.createElement('button');
    switchButton.textContent = 'Go to Contact';
    switchButton.id = 'homeToContact';

    homePageContainer.appendChild(homeTitle);
    homePageContainer.appendChild(switchButton);

    const attachListeners = function () {
        switchButton.addEventListener('click', switchToContact);
    };

    const render = function (parentElement) {
        parentElement.innerHTML = '';
        parentElement.appendChild(homePageContainer);
        attachListeners();
    };

    return { render };
};

export default Homepage;
