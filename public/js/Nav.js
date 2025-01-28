const Nav = function () {
    const TestButton = function () {
        window.location.href = "https://www.google.com";
    };

    const navElement = document.createElement('nav');
    navElement.id = 'nav';

    const navDiv = document.createElement('div');
    navDiv.id = 'navDiv';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'About me';

    const button = document.createElement('button');
    button.textContent = 'Click Me';
    button.id = 'testButton';

    // Append elements
    navDiv.appendChild(paragraph);
    navDiv.appendChild(button);
    navElement.appendChild(navDiv);

    // Attach event listeners
    const attachListeners = function () {
        button.addEventListener('click', TestButton);
    };

    // Render the nav element dynamically
    const render = function (parentElement) {
        parentElement.appendChild(navElement);
        attachListeners();
    };

    return { render };
};

export default Nav;
