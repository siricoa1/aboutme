const Homepage = function () {
    const homePageContainer = document.createElement('div');
    homePageContainer.id = 'homePageContainer';

    const homeTitle = document.createElement('h1');
    homeTitle.textContent = 'Welcome Home';

    homePageContainer.appendChild(homeTitle);

    const render = function (parentElement) {
        parentElement.innerHTML = '';
        parentElement.appendChild(homePageContainer);
    };

    return { render };
};

export default Homepage;
