export default function homepage() {
    const content = document.querySelector('#content');

    const header = document.createElement('div');
    header.classList.add('header');
    const title = document.createElement('h1');
    title.textContent = 'Steak House';
    header.appendChild(title);
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    header.appendChild(buttonContainer);
    const homeButton = document.createElement('button');
    homeButton.setAttribute('id', 'home-button');
    homeButton.textContent = 'HOME';
    buttonContainer.appendChild(homeButton);
    const menuButton = document.createElement('button');
    menuButton.setAttribute('id', 'menu-button');
    menuButton.textContent = 'MENU';
    buttonContainer.appendChild(menuButton);
    const contactsButton = document.createElement('button');
    contactsButton.setAttribute('id', 'contacts-button');
    contactsButton.textContent = 'CONTACTS';
    buttonContainer.appendChild(contactsButton);
    content.appendChild(header);

    const container = document.createElement('div');
    container.classList.add('container');
    const messageBox = document.createElement('div');
    messageBox.classList.add('message-box');
    messageBox.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum, est quis luctus lobortis, lacus purus sodales tortor, tincidunt auctor magna urna sed nisi. Proin convallis sapien metus, eu condimentum dui euismod et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam ornare nec justo sed ornare. Nunc egestas pretium nisi non dictum. Morbi venenatis eget lacus vitae cursus. Etiam est mi, euismod eget elementum sed, suscipit vitae massa.';
    container.appendChild(messageBox);
    content.appendChild(container);

    const footer = document.createElement('div');
    footer.classList.add('footer');
    const imageCredit = document.createElement('p');
    imageCredit.textContent = 'Image source:';
    footer.appendChild(imageCredit);
    const imageLink = document.createElement('a');
    imageLink.textContent = 'quark-studio.com';
    imageLink.href = 'https://quark-studio.com/';
    footer.appendChild(imageLink);
    content.appendChild(footer);
 
    return content;
}