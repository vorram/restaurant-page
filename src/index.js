import './style.css';
import './restaurant-interior.jpg';

function page() {
    const content = document.querySelector('#content');

    const header = document.createElement('div');
    header.classList.add('header');
    const title = document.createElement('h1');
    title.textContent = 'Steak House';
    header.appendChild(title);
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

document.body.appendChild(page());