const Contactpage = function () {
    const contactPageContainer = document.createElement('div');
    contactPageContainer.id = 'contactPageContainer';

    const contactTitle = document.createElement('h1');
    contactTitle.textContent = 'Contact';

    contactPageContainer.appendChild(contactTitle);

    const render = function (parentElement) {
        parentElement.innerHTML = '';
        parentElement.appendChild(contactPageContainer);
    };

    return { render };
};

export default Contactpage;
