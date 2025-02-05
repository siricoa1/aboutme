import Nav from './Nav.js';
import Home from './Home.js';
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

    const renderHome = function () {
        const home = Home();
        home.render(mainContainer);
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    };

    const renderContactpage = function () {
        const contactpage = Contactpage();
        contactpage.render(mainContainer);
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    };

    const nav = Nav(renderHome, renderContactpage);
    nav.render(navContainer);

    renderHome();
};

export default App;
