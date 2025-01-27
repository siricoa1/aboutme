const TestButton = function(){
    window.location.href = "https://www.google.com";
}

window.TestButton = TestButton;
const Nav = function(){
    return(
        '<nav id="nav">'+
            '<div id="navDiv">'+
                '<p>About me</p>'+
                '<button onclick="TestButton()">Click Me</button>'+
            '</div>'+
        '</nav>');
}

export default Nav;