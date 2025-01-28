import Nav from './Nav.js';
import Homepage from './Homepage.js';
import Contactpage from './Contactpage.js';

const App = function (parentElement) {
    const appContainer = document.createElement('div');
    appContainer.id = 'appContainer';

    const navContainer = document.createElement('div');
    navContainer.id = 'navContainer';

    const mainContainer = document.createElement('div');
    mainContainer.id = 'mainContainer';

    appContainer.appendChild(navContainer);
    appContainer.appendChild(mainContainer);
    parentElement.appendChild(appContainer);

    // Render Nav
    const nav = Nav();
    nav.render(navContainer);

    // Function to render Homepage
    const renderHomepage = function () {
        const homepage = Homepage(renderContactpage);
        homepage.render(mainContainer);
    };

    // Function to render Contactpage
    const renderContactpage = function () {
        const contactpage = Contactpage(renderHomepage);
        contactpage.render(mainContainer);
    };

    // Initial Render: Homepage
    renderHomepage();
};

export default App;
