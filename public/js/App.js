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

    const renderHomepage = function () {
        const homepage = Homepage();
        homepage.render(mainContainer);
    };

    const renderContactpage = function () {
        const contactpage = Contactpage();
        contactpage.render(mainContainer);
    };

    const nav = Nav(renderHomepage, renderContactpage);
    nav.render(navContainer);

    renderHomepage();
};

export default App;
