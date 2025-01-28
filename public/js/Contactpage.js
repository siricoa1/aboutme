const Contactpage = function (switchToHome) {
    const contactPageContainer = document.createElement('div');
    contactPageContainer.id = 'contactPageContainer';

    const contactTitle = document.createElement('h1');
    contactTitle.textContent = 'Contact';

    const switchButton = document.createElement('button');
    switchButton.textContent = 'Go to Homepage';
    switchButton.id = 'contactToHome';

    contactPageContainer.appendChild(contactTitle);
    contactPageContainer.appendChild(switchButton);

    const attachListeners = function () {
        switchButton.addEventListener('click', switchToHome);
    };

    const render = function (parentElement) {
        parentElement.innerHTML = '';
        parentElement.appendChild(contactPageContainer);
        attachListeners();
    };

    return { render };
};

export default Contactpage;
