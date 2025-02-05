const Email = function () {

    const emailContainer = document.createElement('div');
    emailContainer.id = 'emailContainer';

    const formContainer = document.createElement('form');
    formContainer.id = 'contactForm';
    formContainer.action = '/send-email';
    formContainer.method = 'POST';

    const inputName = document.createElement('input');
    inputName.type = 'text';
    inputName.name = 'name';
    inputName.placeholder = 'Please provide a name';
    inputName.required = true;
    const nameLabel = document.createElement('label');
    nameLabel.innerText = 'Name'

    const inputEmail = document.createElement('input');
    inputEmail.type = 'email';
    inputEmail.name = 'email';
    inputEmail.placeholder = 'Please provide a registered email address';
    inputEmail.required = true;
    const emailLabel = document.createElement('label');
    emailLabel.innerText = 'Email'

    const inputSubject = document.createElement('input');
    inputSubject.type = 'text';
    inputSubject.name = 'subject';
    inputSubject.placeholder = 'Please enter the subject of the email';
    inputSubject.required = true;
    const subjectLabel = document.createElement('label');
    subjectLabel.innerText = 'Subject'

    const messageArea = document.createElement('textarea');
    messageArea.name = 'message';
    messageArea.placeholder = 'Your message here';
    messageArea.required = true;
    const messageLabel = document.createElement('label');
    messageLabel.innerText = 'message'

    const submitButton = document.createElement('button');
    submitButton.type = 'submit'
    submitButton.innerText = 'Send';
    
    emailContainer.appendChild(formContainer);
    formContainer.appendChild(nameLabel);
    formContainer.appendChild(inputName);
    formContainer.appendChild(emailLabel);
    formContainer.appendChild(inputEmail);
    formContainer.appendChild(subjectLabel);
    formContainer.appendChild(inputSubject);
    formContainer.appendChild(messageLabel);
    formContainer.appendChild(messageArea);
    formContainer.appendChild(submitButton);

    const render = function(parentElement) {
        parentElement.innerHTML = '';
        parentElement.appendChild(emailContainer);
    };

    return { render }
};

export default Email;