export default function home () {
    const container = document.querySelector('.container');
    while (container.firstChild) {
        container.firstChild.remove();
    }

    const messageBox = document.createElement('div');
    messageBox.classList.add('message-box');
    messageBox.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum, est quis luctus lobortis, lacus purus sodales tortor, tincidunt auctor magna urna sed nisi. Proin convallis sapien metus, eu condimentum dui euismod et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam ornare nec justo sed ornare. Nunc egestas pretium nisi non dictum. Morbi venenatis eget lacus vitae cursus. Etiam est mi, euismod eget elementum sed, suscipit vitae massa.';
    container.appendChild(messageBox);
}