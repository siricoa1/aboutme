const Homepage = function () {
    const homePageContainer = document.createElement('div');
    homePageContainer.id = 'homePageContainer';

    const homeTitle = document.createElement('h1');
    homeTitle.textContent = 'Welcome';

    const homeBodyDiv = document.createElement('div');
    homeBodyDiv.id = 'homeBodyDiv';

    const imageContainer = document.createElement('img');
    imageContainer.id = 'homeImageContainer';
    imageContainer.src = '../images/IMG_4179.JPG'

    const imageDiv = document.createElement('div');
    imageDiv.id = 'homeImgDiv';

    const greetingsText = document.createElement('p');
    greetingsText.id = 'homeGreetingsText';
    greetingsText.innerText = 'Hi, my name is Andrew Sirico and I am a software engineer who specializes in web development. I am also experienced writing programs and scripts in Python, Java, and C. Furthermore, my experience extends to SwiftUI, Android Development, and using AWS EC2 instances. I am comfortable querying in SQL, Mongodb, firebase, and GraphQL. Also, I have utilized firebase, am comfortable with using Github, have experience with Jira, and comfortable participating in SCRUM meetings. I am highly sociable, carry a professional demeanor, and have high empathy. I strive to be self-aware and to keep my ego in check. The people I look up to most throughout history are Marcus Aurelius, Diogenes of Sinope, Friedrich Nietzsche, George Washington, Tatanka Iyotake, and Siddhartha Gautama';

    homePageContainer.appendChild(homeTitle);
    homePageContainer.appendChild(homeBodyDiv);
    imageDiv.appendChild(imageContainer);
    homeBodyDiv.appendChild(imageDiv);
    homeBodyDiv.appendChild(greetingsText);

    const render = function (parentElement) {
        parentElement.innerHTML = '';
        parentElement.appendChild(homePageContainer);
    };

    return { render };
};

export default Homepage;
